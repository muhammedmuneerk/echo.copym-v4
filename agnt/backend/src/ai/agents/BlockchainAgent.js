import { OpenAI } from 'openai';
import { ethers } from 'ethers';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../utils/logger.js';
import Web3 from 'web3';

const prisma = new PrismaClient();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export class BlockchainAgent {
    constructor() {
        this.blockchainConfigs = {
            ETHEREUM: {
                name: 'Ethereum',
                chainId: 1,
                rpcUrl: process.env.ETHEREUM_RPC_URL,
                gasPrice: 'high',
                securityLevel: 'highest',
                decentralization: 'highest',
                cost: 'high',
                speed: 'slow',
                ecosystem: 'largest'
            },
            POLYGON: {
                name: 'Polygon',
                chainId: 137,
                rpcUrl: process.env.POLYGON_RPC_URL,
                gasPrice: 'low',
                securityLevel: 'high',
                decentralization: 'medium',
                cost: 'low',
                speed: 'fast',
                ecosystem: 'large'
            },
            BINANCE_SMART_CHAIN: {
                name: 'Binance Smart Chain',
                chainId: 56,
                rpcUrl: process.env.BSC_RPC_URL,
                gasPrice: 'low',
                securityLevel: 'medium',
                decentralization: 'low',
                cost: 'low',
                speed: 'fast',
                ecosystem: 'large'
            },
            AVALANCHE: {
                name: 'Avalanche',
                chainId: 43114,
                rpcUrl: process.env.AVALANCHE_RPC_URL,
                gasPrice: 'medium',
                securityLevel: 'high',
                decentralization: 'high',
                cost: 'medium',
                speed: 'fast',
                ecosystem: 'medium'
            }
        };
    }

    /**
     * Recommend optimal blockchain for asset tokenization
     * @param {Object} assetData - Asset information
     * @returns {Object} Blockchain recommendation
     */
    async recommendBlockchain(assetData) {
        try {
            logger.info('Analyzing blockchain options', { assetId: assetData.id });

            // Analyze requirements
            const requirements = await this.analyzeRequirements(assetData);

            // Evaluate each blockchain
            const evaluations = await this.evaluateBlockchains(assetData, requirements);

            // Generate recommendation
            const recommendation = await this.generateBlockchainRecommendation(assetData, evaluations);

            // Generate smart contract templates
            const smartContractTemplates = await this.generateSmartContractTemplates(assetData, recommendation);

            const result = {
                recommendation,
                requirements,
                evaluations,
                smartContractTemplates,
                deploymentPlan: await this.generateDeploymentPlan(assetData, recommendation),
                costAnalysis: await this.generateCostAnalysis(assetData, recommendation),
                securityConsiderations: await this.generateSecurityConsiderations(assetData, recommendation)
            };

            // Save blockchain analysis
            await this.saveBlockchainAnalysis(assetData.id, result);

            return result;

        } catch (error) {
            logger.error('Blockchain recommendation failed', { error: error.message, assetId: assetData.id });
            throw new Error(`Blockchain recommendation failed: ${error.message}`);
        }
    }

    /**
     * Analyze blockchain requirements for the asset
     * @param {Object} assetData - Asset information
     * @returns {Object} Requirements analysis
     */
    async analyzeRequirements(assetData) {
        const prompt = `
    Analyze blockchain requirements for tokenizing this asset:

    Asset Details:
    - Category: ${assetData.category}
    - Value: $${assetData.totalValue}
    - Expected Investors: ${assetData.expectedInvestors || 'Not specified'}
    - Compliance Requirements: ${assetData.complianceLevel || 'Standard'}
    - Geographic Reach: ${assetData.geographicReach || 'Global'}

    Determine:
    1. Security requirements
    2. Scalability needs
    3. Cost constraints
    4. Regulatory compliance needs
    5. Interoperability requirements
    6. Speed requirements
    7. Ecosystem integration needs

    Provide detailed requirements analysis with priority levels.
    `;

        const response = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                { role: 'system', content: 'You are a blockchain architect specializing in selecting optimal blockchain platforms for tokenized assets.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.1,
            max_tokens: 1500
        });

        const analysis = JSON.parse(response.choices[0].message.content);

        return {
            ...analysis,
            priorityScore: this.calculatePriorityScore(analysis),
            analyzedAt: new Date().toISOString()
        };
    }

    /**
     * Evaluate all available blockchains
     * @param {Object} assetData - Asset information
     * @param {Object} requirements - Requirements analysis
     * @returns {Object} Blockchain evaluations
     */
    async evaluateBlockchains(assetData, requirements) {
        const evaluations = {};

        for (const [blockchain, config] of Object.entries(this.blockchainConfigs)) {
            evaluations[blockchain] = await this.evaluateBlockchain(blockchain, config, assetData, requirements);
        }

        return evaluations;
    }

    /**
     * Evaluate a specific blockchain
     * @param {String} blockchain - Blockchain name
     * @param {Object} config - Blockchain configuration
     * @param {Object} assetData - Asset information
     * @param {Object} requirements - Requirements analysis
     * @returns {Object} Blockchain evaluation
     */
    async evaluateBlockchain(blockchain, config, assetData, requirements) {
        const prompt = `
    Evaluate ${blockchain} for tokenizing this asset:

    Asset: ${JSON.stringify(assetData, null, 2)}
    Requirements: ${JSON.stringify(requirements, null, 2)}
    Blockchain Config: ${JSON.stringify(config, null, 2)}

    Evaluate on:
    1. Security (weight: 25%)
    2. Cost efficiency (weight: 20%)
    3. Scalability (weight: 15%)
    4. Regulatory compliance (weight: 15%)
    5. Developer ecosystem (weight: 10%)
    6. Liquidity access (weight: 10%)
    7. User experience (weight: 5%)

    Provide scoring (0-100) for each criterion and overall recommendation.
    `;

        const response = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                { role: 'system', content: 'You are a blockchain evaluation expert with deep knowledge of different blockchain platforms and their trade-offs.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.1,
            max_tokens: 1200
        });

        const evaluation = JSON.parse(response.choices[0].message.content);

        return {
            ...evaluation,
            blockchain,
            config,
            overallScore: this.calculateOverallScore(evaluation),
            evaluatedAt: new Date().toISOString()
        };
    }

    /**
     * Generate blockchain recommendation
     * @param {Object} assetData - Asset information
     * @param {Object} evaluations - Blockchain evaluations
     * @returns {Object} Blockchain recommendation
     */
    async generateBlockchainRecommendation(assetData, evaluations) {
            // Sort blockchains by score
            const sortedBlockchains = Object.entries(evaluations)
                .sort(([, a], [, b]) => b.overallScore - a.overallScore);

            const topChoice = sortedBlockchains[0];
            const alternatives = sortedBlockchains.slice(1, 3);

            const prompt = `
    Based on these blockchain evaluations, provide a comprehensive recommendation:

    Top Choice: ${topChoice[0]} (Score: ${topChoice[1].overallScore})
    Alternatives: ${alternatives.map(([name, eval]) => `${name} (${eval.overallScore})`).join(', ')}

    Asset: ${JSON.stringify(assetData, null, 2)}
    Evaluations: ${JSON.stringify(evaluations, null, 2)}

    Provide:
    1. Primary recommendation with rationale
    2. Alternative options and scenarios
    3. Risk assessment
    4. Implementation considerations
    5. Future migration possibilities
    6. Cost-benefit analysis

    Give specific, actionable recommendations.
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: 'You are a blockchain strategy consultant specializing in optimal blockchain selection for tokenized assets.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.1,
      max_tokens: 1500
    });

    const recommendation = JSON.parse(response.choices[0].message.content);
    
    return {
      ...recommendation,
      primaryBlockchain: topChoice[0],
      primaryConfig: this.blockchainConfigs[topChoice[0]],
      confidence: topChoice[1].overallScore,
      alternatives: alternatives.map(([name, eval]) => ({
        blockchain: name,
        config: this.blockchainConfigs[name],
        score: eval.overallScore,
        useCase: eval.bestUseCase
      })),
      recommendedAt: new Date().toISOString()
    };
  }

  /**
   * Generate smart contract templates
   * @param {Object} assetData - Asset information
   * @param {Object} recommendation - Blockchain recommendation
   * @returns {Object} Smart contract templates
   */
  async generateSmartContractTemplates(assetData, recommendation) {
    const prompt = `
    Generate smart contract templates for tokenizing this asset on ${recommendation.primaryBlockchain}:

    Asset: ${JSON.stringify(assetData, null, 2)}
    Blockchain: ${recommendation.primaryBlockchain}

    Generate:
    1. Main tokenization contract (ERC-20 or ERC-1155)
    2. Governance contract (if applicable)
    3. Trading/marketplace contract
    4. Compliance contract
    5. Yield distribution contract
    6. Upgrade/migration contract

    Provide Solidity code templates with:
    - Security best practices
    - Gas optimization
    - Upgrade patterns
    - Access controls
    - Event logging
    - Error handling

    Include deployment parameters and initialization functions.
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: 'You are a senior smart contract developer specializing in tokenization contracts with expertise in security and gas optimization.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.1,
      max_tokens: 3000
    });

    const contracts = JSON.parse(response.choices[0].message.content);
    
    return {
      ...contracts,
      blockchain: recommendation.primaryBlockchain,
      contractStandards: this.getContractStandards(assetData, recommendation),
      securityFeatures: this.getSecurityFeatures(assetData, recommendation),
      upgradeability: this.getUpgradeabilityOptions(assetData, recommendation),
      generatedAt: new Date().toISOString()
    };
  }

  /**
   * Generate deployment plan
   * @param {Object} assetData - Asset information
   * @param {Object} recommendation - Blockchain recommendation
   * @returns {Object} Deployment plan
   */
  async generateDeploymentPlan(assetData, recommendation) {
    const blockchain = recommendation.primaryBlockchain;
    const config = this.blockchainConfigs[blockchain];

    return {
      phases: [
        {
          phase: 1,
          name: 'Testnet Deployment',
          duration: '3-5 days',
          tasks: [
            'Deploy contracts to testnet',
            'Comprehensive testing',
            'Security audit',
            'Gas optimization',
            'Integration testing'
          ],
          estimatedCost: 0
        },
        {
          phase: 2,
          name: 'Security Audit',
          duration: '5-7 days',
          tasks: [
            'Professional security audit',
            'Fix identified vulnerabilities',
            'Re-audit if necessary',
            'Security documentation'
          ],
          estimatedCost: 15000
        },
        {
          phase: 3,
          name: 'Mainnet Deployment',
          duration: '1-2 days',
          tasks: [
            'Deploy to mainnet',
            'Verify contracts',
            'Initialize parameters',
            'Transfer ownership',
            'Setup monitoring'
          ],
          estimatedCost: this.calculateDeploymentCost(assetData, config)
        },
        {
          phase: 4,
          name: 'Integration & Launch',
          duration: '2-3 days',
          tasks: [
            'Frontend integration',
            'API integration',
            'Testing with real data',
            'Launch preparation',
            'Monitoring setup'
          ],
          estimatedCost: 0
        }
      ],
      totalDuration: '11-17 days',
      totalCost: 15000 + this.calculateDeploymentCost(assetData, config),
      requirements: [
        'Sufficient gas tokens for deployment',
        'Multisig wallet for contract ownership',
        'Monitoring and alerting system',
        'Emergency response procedures'
      ]
    };
  }

  /**
   * Generate cost analysis
   * @param {Object} assetData - Asset information
   * @param {Object} recommendation - Blockchain recommendation
   * @returns {Object} Cost analysis
   */
  async generateCostAnalysis(assetData, recommendation) {
    const blockchain = recommendation.primaryBlockchain;
    const config = this.blockchainConfigs[blockchain];

    const deploymentCost = this.calculateDeploymentCost(assetData, config);
    const operationalCost = this.calculateOperationalCost(assetData, config);
    const transactionCost = this.calculateTransactionCost(assetData, config);

    return {
      oneTime: {
        deployment: deploymentCost,
        audit: 15000,
        setup: 2000,
        total: deploymentCost + 17000
      },
      recurring: {
        monthly: operationalCost,
        annually: operationalCost * 12
      },
      perTransaction: {
        trading: transactionCost.trading,
        transfer: transactionCost.transfer,
        governance: transactionCost.governance
      },
      breakdown: {
        gasPrice: config.gasPrice,
        estimatedGasUsage: {
          deployment: 3000000,
          trading: 150000,
          transfer: 80000,
          governance: 200000
        }
      },
      comparison: this.generateCostComparison(assetData, recommendation),
      analyzedAt: new Date().toISOString()
    };
  }

  /**
   * Generate security considerations
   * @param {Object} assetData - Asset information
   * @param {Object} recommendation - Blockchain recommendation
   * @returns {Object} Security considerations
   */
  async generateSecurityConsiderations(assetData, recommendation) {
    const prompt = `
    Generate security considerations for tokenizing this asset on ${recommendation.primaryBlockchain}:

    Asset: ${JSON.stringify(assetData, null, 2)}
    Blockchain: ${recommendation.primaryBlockchain}

    Analyze:
    1. Smart contract security risks
    2. Blockchain-specific vulnerabilities
    3. Key management requirements
    4. Upgrade security
    5. Governance security
    6. Oracle security (if applicable)
    7. Bridge security (if multi-chain)

    Provide specific recommendations and mitigation strategies.
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: 'You are a blockchain security expert specializing in smart contract and tokenization security.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.1,
      max_tokens: 1500
    });

    const security = JSON.parse(response.choices[0].message.content);
    
    return {
      ...security,
      riskLevel: this.calculateSecurityRiskLevel(assetData, recommendation),
      recommendations: security.recommendations || [],
      auditRequirements: this.getAuditRequirements(assetData, recommendation),
      monitoringRequirements: this.getMonitoringRequirements(assetData, recommendation),
      analyzedAt: new Date().toISOString()
    };
  }

  /**
   * Helper methods for calculations and configurations
   */
  calculatePriorityScore(analysis) {
    // Implementation for priority scoring
    return 85;
  }

  calculateOverallScore(evaluation) {
    const weights = {
      security: 0.25,
      cost: 0.20,
      scalability: 0.15,
      compliance: 0.15,
      ecosystem: 0.10,
      liquidity: 0.10,
      userExperience: 0.05
    };

    let score = 0;
    Object.entries(weights).forEach(([criterion, weight]) => {
      score += (evaluation[criterion] || 70) * weight;
    });

    return Math.round(score);
  }

  calculateDeploymentCost(assetData, config) {
    const baseCost = {
      high: 500,
      medium: 100,
      low: 20
    };

    return baseCost[config.gasPrice] || 100;
  }

  calculateOperationalCost(assetData, config) {
    const baseCost = {
      high: 200,
      medium: 50,
      low: 10
    };

    return baseCost[config.gasPrice] || 50;
  }

  calculateTransactionCost(assetData, config) {
    const baseCost = {
      high: { trading: 25, transfer: 10, governance: 15 },
      medium: { trading: 5, transfer: 2, governance: 3 },
      low: { trading: 1, transfer: 0.5, governance: 0.8 }
    };

    return baseCost[config.gasPrice] || baseCost.medium;
  }

  generateCostComparison(assetData, recommendation) {
    const costs = {};
    Object.entries(this.blockchainConfigs).forEach(([blockchain, config]) => {
      costs[blockchain] = {
        deployment: this.calculateDeploymentCost(assetData, config),
        operational: this.calculateOperationalCost(assetData, config),
        transaction: this.calculateTransactionCost(assetData, config)
      };
    });
    return costs;
  }

  getContractStandards(assetData, recommendation) {
    return {
      token: assetData.category === 'REAL_ESTATE' ? 'ERC-1155' : 'ERC-20',
      governance: 'OpenZeppelin Governor',
      access: 'AccessControl',
      upgradeability: 'UUPS Proxy'
    };
  }

  getSecurityFeatures(assetData, recommendation) {
    return [
      'Reentrancy protection',
      'Pausable functionality',
      'Role-based access control',
      'Time-locked upgrades',
      'Multi-signature requirements',
      'Emergency stop mechanisms'
    ];
  }

  getUpgradeabilityOptions(assetData, recommendation) {
    return {
      pattern: 'UUPS (Universal Upgradeable Proxy Standard)',
      governance: 'Multi-sig with timelock',
      emergency: 'Guardian role for critical fixes',
      migration: 'Token migration contract for major upgrades'
    };
  }

  calculateSecurityRiskLevel(assetData, recommendation) {
    // Implementation for security risk calculation
    return 'MEDIUM';
  }

  getAuditRequirements(assetData, recommendation) {
    return [
      'Professional security audit by certified auditor',
      'Formal verification of critical functions',
      'Economic security analysis',
      'Governance security review'
    ];
  }

  getMonitoringRequirements(assetData, recommendation) {
    return [
      'Contract event monitoring',
      'Unusual transaction detection',
      'Governance proposal monitoring',
      'Price manipulation detection',
      'Liquidity monitoring'
    ];
  }

  /**
   * Save blockchain analysis to database
   * @param {String} assetId - Asset ID
   * @param {Object} analysis - Blockchain analysis
   */
  async saveBlockchainAnalysis(assetId, analysis) {
    await prisma.aIAnalysis.create({
      data: {
        assetId,
        analysisType: 'BLOCKCHAIN_RECOMMENDATION',
        aiModel: 'gpt-4-turbo-preview',
        confidence: analysis.recommendation.confidence,
        result: analysis,
        insights: analysis.recommendation.insights || [],
        recommendations: analysis.recommendation.recommendations || []
      }
    });
  }

  /**
   * Get blockchain analysis for an asset
   * @param {String} assetId - Asset ID
   * @returns {Object} Blockchain analysis
   */
  async getBlockchainAnalysis(assetId) {
    const analysis = await prisma.aIAnalysis.findFirst({
      where: {
        assetId,
        analysisType: 'BLOCKCHAIN_RECOMMENDATION'
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return analysis || null;
  }

  /**
   * Deploy smart contract
   * @param {String} assetId - Asset ID
   * @param {Object} contractData - Contract deployment data
   * @returns {Object} Deployment result
   */
  async deploySmartContract(assetId, contractData) {
    try {
      const asset = await prisma.asset.findUnique({
        where: { id: assetId }
      });

      if (!asset) {
        throw new Error('Asset not found');
      }

      const blockchain = contractData.blockchain;
      const config = this.blockchainConfigs[blockchain];

      // Initialize provider
      const provider = new ethers.JsonRpcProvider(config.rpcUrl);
      const wallet = new ethers.Wallet(process.env.DEPLOYMENT_PRIVATE_KEY, provider);

      // Deploy contract (simplified - would use actual contract bytecode)
      const contractFactory = new ethers.ContractFactory(
        contractData.abi,
        contractData.bytecode,
        wallet
      );

      const contract = await contractFactory.deploy(
        ...contractData.constructorArgs
      );

      await contract.waitForDeployment();

      const deploymentResult = {
        contractAddress: await contract.getAddress(),
        transactionHash: contract.deploymentTransaction().hash,
        blockNumber: (await contract.deploymentTransaction().wait()).blockNumber,
        gasUsed: (await contract.deploymentTransaction().wait()).gasUsed,
        blockchain,
        deployedAt: new Date().toISOString()
      };

      // Update asset with contract information
      await prisma.asset.update({
        where: { id: assetId },
        data: {
          contractAddress: deploymentResult.contractAddress,
          blockchain,
          deploymentTxHash: deploymentResult.transactionHash,
          status: 'TOKENIZED'
        }
      });

      return deploymentResult;

    } catch (error) {
      logger.error('Smart contract deployment failed', { error: error.message, assetId });
      throw new Error(`Smart contract deployment failed: ${error.message}`);
    }
  }
}

export default BlockchainAgent;