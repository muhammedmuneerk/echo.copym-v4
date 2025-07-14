import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seed...');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123456', 12);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@copymai.ai' },
        update: {},
        create: {
            email: 'admin@copymai.ai',
            username: 'admin',
            password: adminPassword,
            firstName: 'Admin',
            lastName: 'User',
            role: 'ADMIN',
            kycStatus: 'VERIFIED',
            profile: {
                create: {
                    riskTolerance: 'MEDIUM',
                    investmentGoals: 'Platform management and oversight',
                    country: 'United States'
                }
            }
        }
    });

    console.log('✅ Created admin user:', admin.email);

    // Create asset manager user
    const managerPassword = await bcrypt.hash('manager123456', 12);
    const manager = await prisma.user.upsert({
        where: { email: 'manager@copymai.ai' },
        update: {},
        create: {
            email: 'manager@copymai.ai',
            username: 'assetmanager',
            password: managerPassword,
            firstName: 'Asset',
            lastName: 'Manager',
            role: 'ASSET_MANAGER',
            kycStatus: 'VERIFIED',
            profile: {
                create: {
                    riskTolerance: 'HIGH',
                    investmentGoals: 'Asset tokenization and management',
                    country: 'United States'
                }
            }
        }
    });

    console.log('✅ Created asset manager user:', manager.email);

    // Create demo investor user
    const investorPassword = await bcrypt.hash('investor123456', 12);
    const investor = await prisma.user.upsert({
        where: { email: 'demo@investor.com' },
        update: {},
        create: {
            email: 'demo@investor.com',
            username: 'demoinvestor',
            password: investorPassword,
            firstName: 'Demo',
            lastName: 'Investor',
            role: 'INVESTOR',
            kycStatus: 'VERIFIED',
            profile: {
                create: {
                    riskTolerance: 'MEDIUM',
                    investmentGoals: 'Diversified portfolio growth',
                    investmentHorizon: '5-10 years',
                    country: 'United States',
                    netWorth: 250000,
                    annualIncome: 75000
                }
            }
        }
    });

    console.log('✅ Created demo investor user:', investor.email);

    // Create sample assets
    const assets = [{
            name: 'Manhattan Commercial Property',
            description: 'Prime commercial real estate located in the heart of Manhattan, New York. This property features modern office spaces with high-end finishes and excellent accessibility to public transportation. The building has a strong tenant base with long-term leases, providing stable rental income. Located in a rapidly developing area with significant appreciation potential.',
            category: 'REAL_ESTATE',
            totalValue: 2500000,
            tokenPrice: 100,
            totalSupply: 25000,
            availableSupply: 25000,
            minimumInvestment: 100,
            location: 'New York, NY, USA',
            status: 'LIVE',
            legalStructure: 'LLC',
            jurisdiction: 'New York',
            creatorId: manager.id
        },
        {
            name: 'Rolex Submariner Collection',
            description: 'Rare collection of vintage Rolex Submariner watches from the 1960s-1980s. This collection includes several highly sought-after references including the "Red Sub" and "Double Red Sea-Dweller". All watches are authenticated and in excellent condition with original boxes and papers where applicable. The luxury watch market has shown consistent growth over the past decade.',
            category: 'LUXURY_GOODS',
            totalValue: 500000,
            tokenPrice: 100,
            totalSupply: 5000,
            availableSupply: 5000,
            minimumInvestment: 100,
            location: 'Geneva, Switzerland',
            status: 'LIVE',
            legalStructure: 'Trust',
            jurisdiction: 'Switzerland',
            creatorId: manager.id
        },
        {
            name: 'Modern Art Portfolio',
            description: 'Curated collection of contemporary artworks by emerging and established artists. The portfolio includes paintings, sculptures, and mixed media pieces from artists with strong market presence and exhibition history. All pieces have been professionally appraised and authenticated. The art market has shown resilience and growth potential over time.',
            category: 'FINE_ART',
            totalValue: 750000,
            tokenPrice: 100,
            totalSupply: 7500,
            availableSupply: 7500,
            minimumInvestment: 100,
            location: 'Los Angeles, CA, USA',
            status: 'APPROVED',
            legalStructure: 'Corporation',
            jurisdiction: 'California',
            creatorId: manager.id
        },
        {
            name: 'Bordeaux Wine Collection',
            description: 'Premium vintage wine collection featuring first growth Bordeaux wines from exceptional vintages. This collection includes Château Lafite Rothschild, Château Margaux, and Château Latour from highly rated years. All wines are stored in professional wine storage facilities with optimal temperature and humidity control. Fine wine has demonstrated strong investment performance historically.',
            category: 'WINE_SPIRITS',
            totalValue: 300000,
            tokenPrice: 100,
            totalSupply: 3000,
            availableSupply: 3000,
            minimumInvestment: 100,
            location: 'Bordeaux, France',
            status: 'UNDER_REVIEW',
            legalStructure: 'Partnership',
            jurisdiction: 'France',
            creatorId: manager.id
        }
    ];

    for (const assetData of assets) {
        const asset = await prisma.asset.create({
            data: assetData
        });
        console.log(`✅ Created asset: ${asset.name}`);

        // Add some sample AI analysis for live assets
        if (asset.status === 'LIVE') {
            await prisma.aIAnalysis.create({
                data: {
                    assetId: asset.id,
                    analysisType: 'MARKET_ANALYSIS',
                    aiModel: 'gpt-4-turbo-preview',
                    confidence: 85 + Math.random() * 10, // Random confidence between 85-95
                    result: {
                        marketScore: 85,
                        riskLevel: 'MEDIUM',
                        projectedReturn: '8-12%',
                        liquidityScore: 75,
                        recommendation: 'BUY'
                    },
                    insights: [
                        'Strong historical performance in this asset category',
                        'Market conditions favorable for investment',
                        'Good diversification opportunity'
                    ],
                    recommendations: [
                        'Consider allocating 5-10% of portfolio to this asset',
                        'Monitor market conditions for optimal entry point',
                        'Review quarterly performance metrics'
                    ]
                }
            });

            // Add price history
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 30); // 30 days ago

            for (let i = 0; i < 30; i++) {
                const date = new Date(startDate);
                date.setDate(date.getDate() + i);

                const basePrice = asset.tokenPrice;
                const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
                const price = basePrice * (1 + variation);

                await prisma.priceHistory.create({
                    data: {
                        assetId: asset.id,
                        price: Math.round(price * 100) / 100,
                        volume: Math.floor(Math.random() * 100) + 10,
                        timestamp: date
                    }
                });
            }
        }
    }

    // Create a sample portfolio for the demo investor
    const portfolio = await prisma.portfolio.create({
        data: {
            userId: investor.id,
            name: 'My Investment Portfolio',
            description: 'Diversified portfolio of tokenized real-world assets',
            isDefault: true
        }
    });

    console.log('✅ Created demo portfolio');

    // Add some investments to the portfolio
    const liveAssets = await prisma.asset.findMany({
        where: { status: 'LIVE' },
        take: 2
    });

    for (const asset of liveAssets) {
        const quantity = Math.floor(Math.random() * 50) + 10; // 10-60 tokens
        const totalCost = quantity * asset.tokenPrice;

        await prisma.portfolioItem.create({
            data: {
                portfolioId: portfolio.id,
                assetId: asset.id,
                quantity,
                averagePrice: asset.tokenPrice,
                currentValue: totalCost,
                totalCost
            }
        });

        // Create investment record
        await prisma.investment.create({
            data: {
                userId: investor.id,
                assetId: asset.id,
                quantity,
                pricePerToken: asset.tokenPrice,
                totalAmount: totalCost,
                investmentType: 'BUY',
                status: 'COMPLETED'
            }
        });

        // Create transaction record
        await prisma.transaction.create({
            data: {
                userId: investor.id,
                assetId: asset.id,
                type: 'BUY',
                amount: totalCost,
                quantity,
                pricePerUnit: asset.tokenPrice,
                status: 'COMPLETED'
            }
        });

        console.log(`✅ Added ${quantity} tokens of ${asset.name} to demo portfolio`);
    }

    // Create system configuration
    await prisma.systemConfig.upsert({
        where: { key: 'platform_version' },
        update: { value: '1.0.0' },
        create: {
            key: 'platform_version',
            value: '1.0.0',
            description: 'Current platform version'
        }
    });

    await prisma.systemConfig.upsert({
        where: { key: 'maintenance_mode' },
        update: { value: 'false' },
        create: {
            key: 'maintenance_mode',
            value: 'false',
            description: 'Platform maintenance mode status'
        }
    });

    console.log('✅ Created system configuration');

    console.log('\n🎉 Database seed completed successfully!');
    console.log('\n👤 Demo Users Created:');
    console.log('Admin: admin@copymai.ai / admin123456');
    console.log('Asset Manager: manager@copymai.ai / manager123456');
    console.log('Demo Investor: demo@investor.com / investor123456');
    console.log('\n📊 Sample Data:');
    console.log('- 4 sample assets with different statuses');
    console.log('- AI analysis for live assets');
    console.log('- Price history for live assets');
    console.log('- Demo portfolio with investments');
    console.log('- System configuration');
}

main()
    .catch((e) => {
        console.error('❌ Error during seed:', e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    });