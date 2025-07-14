import { OpenAI } from 'openai';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../utils/logger.js';
import axios from 'axios';

const prisma = new PrismaClient();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export class ComplianceAgent {
    constructor() {
        this.regulatoryAPIs = {
            SEC: process.env.SEC_API_URL,
            FINRA: process.env.FINRA_API_URL,
            EU_ESMA: process.env.ESMA_API_URL
        };
    }

    /**
     * Perform comprehensive compliance check
     * @param {Object} assetData - Asset information
     * @returns {Object} Compliance results
     */
    async performComplianceCheck(assetData) {
        try {
            logger.info('Starting compliance check', { assetId: assetData.id });

            // Run all compliance checks in parallel
            const [
                kycAmlCheck,
                regulatoryCheck,
                accreditedInvestorCheck,
                jurisdictionCheck,
                taxComplianceCheck,
                sanctionsCheck
            ] = await Promise.all([
                this.performKYCAMLCheck(assetData),
                this.performRegulatoryCheck(assetData),
                this.checkAccreditedInvestorRequirements(assetData),
                this.checkJurisdictionCompliance(assetData),
                this.checkTaxCompliance(assetData),
                this.checkSanctionsList(assetData)
            ]);

            const overallScore = this.calculateComplianceScore({
                kycAmlCheck,
                regulatoryCheck,
                accreditedInvestorCheck,
                jurisdictionCheck,
                taxComplianceCheck,
                sanctionsCheck
            });

            const result = {
                overallScore,
                status: overallScore >= 80 ? 'COMPLIANT' : overallScore >= 60 ? 'PARTIAL' : 'NON_COMPLIANT',
                checks: {
                    kycAmlCheck,
                    regulatoryCheck,
                    accreditedInvestorCheck,
                    jurisdictionCheck,
                    taxComplianceCheck,
                    sanctionsCheck
                },
                recommendations: await this.generateComplianceRecommendations(assetData, {
                    kycAmlCheck,
                    regulatoryCheck,
                    accreditedInvestorCheck,
                    jurisdictionCheck,
                    taxComplianceCheck,
                    sanctionsCheck
                }),
                requiredActions: this.generateRequiredActions(overallScore),
                estimatedComplianceTime: this.estimateComplianceTime(overallScore)
            };

            // Save compliance results
            await this.saveComplianceResults(assetData.id, result);

            return result;

        } catch (error) {
            logger.error('Compliance check failed', { error: error.message, assetId: assetData.id });
            throw new Error(`Compliance check failed: ${error.message}`);
        }
    }

    /**
     * KYC/AML compliance check
     * @param {Object} assetData - Asset information
     * @returns {Object} KYC/AML results
     */
    async performKYCAMLCheck(assetData) {
        const prompt = `
    Analyze the following asset for KYC/AML compliance requirements:

    Asset: ${JSON.stringify(assetData, null, 2)}

    Please assess:
    1. KYC requirements for asset owners and investors
    2. AML risk factors
    3. Beneficial ownership disclosure needs
    4. Source of funds verification
    5. Ongoing monitoring requirements
    6. Reporting obligations

    Provide a detailed compliance assessment with risk level and recommendations.
    `;

        const response = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                { role: 'system', content: 'You are a compliance expert specializing in KYC/AML regulations for tokenized assets and securities.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.1,
            max_tokens: 1500
        });

        const analysis = JSON.parse(response.choices[0].message.content);

        return {
            score: analysis.score || 75,
            riskLevel: analysis.riskLevel || 'MEDIUM',
            requirements: analysis.requirements || [],
            recommendations: analysis.recommendations || [],
            status: analysis.status || 'PENDING',
            checkedAt: new Date().toISOString()
        };
    }

    /**
     * Regulatory compliance check
     * @param {Object} assetData - Asset information
     * @returns {Object} Regulatory compliance results
     */
    async performRegulatoryCheck(assetData) {
        const jurisdictions = assetData.jurisdiction ? [assetData.jurisdiction] : ['US', 'EU'];
        const regulatoryResults = {};

        for (const jurisdiction of jurisdictions) {
            const prompt = `
      Analyze regulatory compliance for tokenizing this asset in ${jurisdiction}:

      Asset Details:
      - Category: ${assetData.category}
      - Value: $${assetData.totalValue}
      - Location: ${assetData.location || 'Not specified'}
      - Structure: ${assetData.legalStructure || 'Not specified'}

      Assess:
      1. Securities regulations applicability
      2. Exemptions available (Reg D, Reg S, etc.)
      3. Registration requirements
      4. Disclosure obligations
      5. Investor restrictions
      6. Ongoing compliance requirements

      Provide detailed regulatory analysis for ${jurisdiction}.
      `;

            const response = await openai.chat.completions.create({
                model: 'gpt-4-turbo-preview',
                messages: [
                    { role: 'system', content: `You are a securities law expert specializing in ${jurisdiction} regulations for tokenized assets.` },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.1,
                max_tokens: 1500
            });

            regulatoryResults[jurisdiction] = JSON.parse(response.choices[0].message.content);
        }

        return {
            jurisdictions: regulatoryResults,
            overallCompliance: Object.values(regulatoryResults).every(r => r.compliant) ? 'COMPLIANT' : 'REVIEW_REQUIRED',
            score: Object.values(regulatoryResults).reduce((sum, r) => sum + (r.score || 70), 0) / jurisdictions.length,
            checkedAt: new Date().toISOString()
        };
    }

    /**
     * Check accredited investor requirements
     * @param {Object} assetData - Asset information
     * @returns {Object} Accredited investor check results
     */
    async checkAccreditedInvestorRequirements(assetData) {
        const prompt = `
    For this asset tokenization, determine accredited investor requirements:

    Asset Value: $${assetData.totalValue}
    Minimum Investment: $${assetData.minimumInvestment || 100}
    Category: ${assetData.category}

    Analyze:
    1. Is accredited investor status required?
    2. What are the verification requirements?
    3. Are there any exemptions for smaller investments?
    4. What documentation is needed?
    5. Ongoing verification requirements

    Provide detailed requirements and recommendations.
    `;

        const response = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                { role: 'system', content: 'You are a securities law expert specializing in accredited investor requirements for tokenized assets.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.1,
            max_tokens: 1000
        });

        const analysis = JSON.parse(response.choices[0].message.content);

        return {
            required: analysis.required || false,
            requirements: analysis.requirements || [],
            exemptions: analysis.exemptions || [],
            verificationProcess: analysis.verificationProcess || [],
            score: analysis.score || 85,
            checkedAt: new Date().toISOString()
        };
    }

    /**
     * Check jurisdiction-specific compliance
     * @param {Object} assetData - Asset information
     * @returns {Object} Jurisdiction compliance results
     */
    async checkJurisdictionCompliance(assetData) {
        const location = assetData.location || 'United States';

        const prompt = `
    Analyze jurisdiction-specific compliance for tokenizing an asset located in ${location}:

    Asset Category: ${assetData.category}
    Asset Value: $${assetData.totalValue}

    Consider:
    1. Local tokenization laws
    2. Cross-border investment restrictions
    3. Tax implications
    4. Licensing requirements
    5. Operational restrictions
    6. Reporting requirements

    Provide jurisdiction-specific compliance analysis.
    `;

        const response = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                { role: 'system', content: 'You are a legal expert specializing in international tokenization and securities law.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.1,
            max_tokens: 1000
        });

        const analysis = JSON.parse(response.choices[0].message.content);

        return {
            jurisdiction: location,
            compliant: analysis.compliant || false,
            restrictions: analysis.restrictions || [],
            requirements: analysis.requirements || [],
            score: analysis.score || 70,
            checkedAt: new Date().toISOString()
        };
    }

    /**
     * Check tax compliance requirements
     * @param {Object} assetData - Asset information
     * @returns {Object} Tax compliance results
     */
    async checkTaxCompliance(assetData) {
        const prompt = `
    Analyze tax compliance requirements for tokenizing this asset:

    Asset Category: ${assetData.category}
    Asset Value: $${assetData.totalValue}
    Location: ${assetData.location || 'Not specified'}

    Consider:
    1. Tax classification of tokens
    2. Investor tax implications
    3. Withholding requirements
    4. Reporting obligations
    5. International tax treaties
    6. Tax-efficient structures

    Provide comprehensive tax compliance analysis.
    `;

        const response = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                { role: 'system', content: 'You are a tax expert specializing in tokenized assets and digital securities taxation.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.1,
            max_tokens: 1000
        });

        const analysis = JSON.parse(response.choices[0].message.content);

        return {
            taxClassification: analysis.taxClassification || 'SECURITY',
            implications: analysis.implications || [],
            requirements: analysis.requirements || [],
            optimizations: analysis.optimizations || [],
            score: analysis.score || 75,
            checkedAt: new Date().toISOString()
        };
    }

    /**
     * Check sanctions list
     * @param {Object} assetData - Asset information
     * @returns {Object} Sanctions check results
     */
    async checkSanctionsList(assetData) {
        // This would typically integrate with actual sanctions databases
        // For now, we'll use AI to assess sanctions risk

        const prompt = `
    Assess sanctions risk for this asset:

    Asset Location: ${assetData.location || 'Not specified'}
    Asset Category: ${assetData.category}
    Owner Information: ${assetData.ownerInfo || 'Not provided'}

    Check for:
    1. Sanctioned countries/regions
    2. Restricted industries
    3. Potential sanctions exposure
    4. Mitigation strategies

    Provide sanctions risk assessment.
    `;

        const response = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                { role: 'system', content: 'You are a sanctions and compliance expert specializing in financial services.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.1,
            max_tokens: 800
        });

        const analysis = JSON.parse(response.choices[0].message.content);

        return {
            riskLevel: analysis.riskLevel || 'LOW',
            findings: analysis.findings || [],
            recommendations: analysis.recommendations || [],
            score: analysis.score || 90,
            checkedAt: new Date().toISOString()
        };
    }

    /**
     * Calculate overall compliance score
     * @param {Object} checks - All compliance check results
     * @returns {Number} Overall compliance score
     */
    calculateComplianceScore(checks) {
        const weights = {
            kycAmlCheck: 0.25,
            regulatoryCheck: 0.30,
            accreditedInvestorCheck: 0.15,
            jurisdictionCheck: 0.15,
            taxComplianceCheck: 0.10,
            sanctionsCheck: 0.05
        };

        let totalScore = 0;
        let totalWeight = 0;

        Object.entries(checks).forEach(([key, check]) => {
            if (check && check.score) {
                totalScore += check.score * weights[key];
                totalWeight += weights[key];
            }
        });

        return totalWeight > 0 ? Math.round(totalScore / totalWeight) : 0;
    }

    /**
     * Generate compliance recommendations
     * @param {Object} assetData - Asset information
     * @param {Object} checks - Compliance check results
     * @returns {Array} Recommendations
     */
    async generateComplianceRecommendations(assetData, checks) {
        const recommendations = [];

        // Add recommendations based on check results
        if (checks.kycAmlCheck.score < 80) {
            recommendations.push({
                priority: 'HIGH',
                category: 'KYC/AML',
                description: 'Implement enhanced KYC/AML procedures',
                actions: ['Upgrade verification system', 'Add ongoing monitoring', 'Implement risk scoring']
            });
        }

        if (checks.regulatoryCheck.score < 80) {
            recommendations.push({
                priority: 'HIGH',
                category: 'Regulatory',
                description: 'Address regulatory compliance gaps',
                actions: ['File necessary exemptions', 'Update disclosure documents', 'Implement compliance monitoring']
            });
        }

        if (checks.accreditedInvestorCheck.required) {
            recommendations.push({
                priority: 'MEDIUM',
                category: 'Accredited Investor',
                description: 'Implement accredited investor verification',
                actions: ['Set up verification system', 'Create investor questionnaire', 'Establish ongoing monitoring']
            });
        }

        return recommendations;
    }

    /**
     * Generate required actions based on compliance score
     * @param {Number} score - Overall compliance score
     * @returns {Array} Required actions
     */
    generateRequiredActions(score) {
        const actions = [];

        if (score < 60) {
            actions.push({
                priority: 'CRITICAL',
                description: 'Major compliance issues must be resolved before tokenization',
                deadline: '30 days'
            });
        } else if (score < 80) {
            actions.push({
                priority: 'HIGH',
                description: 'Compliance improvements needed before launch',
                deadline: '14 days'
            });
        }

        return actions;
    }

    /**
     * Estimate compliance completion time
     * @param {Number} score - Overall compliance score
     * @returns {String} Estimated time
     */
    estimateComplianceTime(score) {
        if (score >= 90) return '1-2 days';
        if (score >= 80) return '3-5 days';
        if (score >= 60) return '1-2 weeks';
        return '2-4 weeks';
    }

    /**
     * Save compliance results to database
     * @param {String} assetId - Asset ID
     * @param {Object} results - Compliance results
     */
    async saveComplianceResults(assetId, results) {
        await prisma.complianceCheck.create({
            data: {
                assetId,
                checkType: 'COMPREHENSIVE',
                status: results.status === 'COMPLIANT' ? 'PASSED' : 'PENDING',
                result: results,
                notes: `Overall compliance score: ${results.overallScore}%`,
                checkedAt: new Date()
            }
        });
    }

    /**
     * Get compliance status for an asset
     * @param {String} assetId - Asset ID
     * @returns {Object} Compliance status
     */
    async getComplianceStatus(assetId) {
        const check = await prisma.complianceCheck.findFirst({
            where: {
                assetId,
                checkType: 'COMPREHENSIVE'
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return check || null;
    }

    /**
     * Update compliance status
     * @param {String} assetId - Asset ID
     * @param {Object} updates - Status updates
     */
    async updateComplianceStatus(assetId, updates) {
        await prisma.complianceCheck.updateMany({
            where: {
                assetId,
                checkType: 'COMPREHENSIVE'
            },
            data: updates
        });
    }
}

export default ComplianceAgent;