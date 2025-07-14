# CopymAI RWA Tokenization Platform - Prompt-to-Code Setup

## 🚀 Quick Start Guide for Cursor/Claude

This guide provides ready-to-use prompts and setup instructions for rapidly developing the CopymAI platform using AI coding assistants.

## 📋 Prerequisites Setup

### 1. Environment Setup
```bash
# Create project directory
mkdir copymai-rwa-platform
cd copymai-rwa-platform

# Initialize Git
git init

# Create directory structure
mkdir -p backend/src/{routes,controllers,middleware,utils,ai/agents,models}
mkdir -p frontend/src/{components,pages,hooks,utils,contexts}
mkdir -p docs
```

### 2. Essential Dependencies
```bash
# Backend dependencies
npm init -y
npm install express cors helmet express-rate-limit express-validator
npm install jsonwebtoken bcryptjs dotenv prisma @prisma/client
npm install ethers web3 axios multer sharp uuid winston
npm install openai anthropic langchain socket.io compression morgan
npm install joi swagger-ui-express swagger-jsdoc express-async-handler

# Frontend dependencies (in frontend directory)
npm install react react-dom react-router-dom axios framer-motion
npm install @reduxjs/toolkit react-redux react-hook-form
npm install lucide-react recharts date-fns
```

## 🤖 AI Development Prompts

### Prompt 1: Database Schema Generation

```
Create a comprehensive Prisma schema for an AI-powered Real-World Asset (RWA) tokenization platform with the following requirements:

1. User management with roles (ADMIN, ASSET_MANAGER, INVESTOR, COMPLIANCE_OFFICER)
2. Asset management with categories (REAL_ESTATE, FINE_ART, LUXURY_GOODS, etc.)
3. Tokenization workflow tracking
4. AI analysis results storage
5. Blockchain integration data
6. Compliance and KYC tracking
7. Portfolio and investment management
8. Transaction history
9. Pricing and valuation data
10. Notification system

Include:
- Proper relationships between models
- Comprehensive enums for all status fields
- Indexes for performance
- JSON fields for flexible metadata
- Audit fields (createdAt, updatedAt)
- Soft deletes where appropriate

Use PostgreSQL as the database provider.
```

### Prompt 2: AI Agent Development

```
Create a comprehensive AI Agent class for Real-World Asset tokenization with the following specifications:

Agent Name: TokenizationAgent
Purpose: Analyze assets and generate tokenization strategies using OpenAI GPT-4

Required Methods:
1. `analyzeAsset(assetData)` - Analyze asset for tokenization potential
2. `generateTokenizationStrategy(assetData)` - Create detailed tokenization plan
3. `generateDataStructure(assetType)` - Define required data fields
4. `generateIssuanceFlow(assetData)` - Create step-by-step issuance workflow
5. `calculateTokenomics(assetData)` - Determine optimal token economics
6. `recommendBlockchain(assetData)` - Suggest best blockchain platform
7. `assessCompliance(assetData)` - Evaluate regulatory compliance
8. `generateSmartContract(assetData)` - Create smart contract template

Features:
- Integration with OpenAI API
- Error handling and retries
- Response validation
- Confidence scoring
- Database persistence
- Logging and monitoring
- Rate limiting compliance

Return structured JSON responses with actionable recommendations.
```

### Prompt 3: Express API Routes

```
Create a comprehensive Express.js API route file for asset tokenization with the following endpoints:

Base route: /api/tokenization

Endpoints needed:
1. POST /analyze - Analyze asset for tokenization (requires auth)
2. GET /data-structure/:assetType - Get required data structure
3. POST /issuance-flow - Generate token issuance workflow
4. GET /status/:assetId - Get tokenization status
5. PUT /progress/:assetId - Update tokenization progress (admin only)
6. POST /execute/:assetId - Execute tokenization process (admin only)
7. GET /history - Get tokenization history (paginated)

Requirements:
- Input validation with express-validator
- Authentication middleware
- Role-based access control
- Comprehensive error handling
- Swagger documentation comments
- Rate limiting
- Async/await pattern
- Proper HTTP status codes
- Database integration with Prisma
- Real-time updates with Socket.IO
```

### Prompt 4: React Frontend Component

```
Create a comprehensive React component for an Asset Tokenization Wizard with the following specifications:

Component Name: AssetTokenizationWizard
Purpose: Multi-step form for asset tokenization with AI-powered analysis

Steps:
1. Asset Information (name, category, value, description)
2. Asset Details (location, minimum investment, compliance level)
3. Documentation Upload (files, images)
4. AI Analysis (real-time analysis with progress)
5. Review & Submit (final review and submission)

Features:
- Multi-step form with validation
- File upload with preview
- Real-time AI analysis display
- Progress tracking
- Form state management
- Error handling
- Responsive design
- Animations with Framer Motion
- Integration with backend API
- Loading states and spinners

Use React hooks, modern ES6+, and TypeScript if possible.
Include proper error boundaries and accessibility features.
```

### Prompt 5: Smart Contract Template

```
Create a comprehensive Solidity smart contract template for tokenizing real-world assets with the following specifications:

Contract Name: RWAToken
Token Standard: ERC-20 with additional features
Purpose: Represent fractional ownership of real-world assets

Required Features:
1. Fractional ownership with precise decimal handling
2. Compliance controls (KYC/AML integration)
3. Transfer restrictions and whitelist management
4. Dividend distribution mechanism
5. Governance voting rights
6. Upgradeable contract pattern (UUPS)
7. Pause/unpause functionality
8. Emergency stop mechanism
9. Multi-signature requirements for admin functions
10. Event logging for all major operations

Security Requirements:
- Reentrancy protection
- Overflow/underflow protection
- Access control with roles
- Time-locked admin functions
- Rate limiting for operations
- Gas optimization

Include comprehensive comments and NatSpec documentation.
Follow OpenZeppelin standards and best practices.
```

### Prompt 6: Blockchain Integration Service

```
Create a comprehensive Blockchain Integration Service for multi-chain asset tokenization with the following specifications:

Service Name: BlockchainService
Purpose: Handle all blockchain interactions for asset tokenization

Supported Chains:
- Ethereum (mainnet/testnet)
- Polygon
- Binance Smart Chain
- Avalanche

Required Methods:
1. `deployContract(contractData, chainId)` - Deploy smart contracts
2. `verifyContract(contractAddress, chainId)` - Verify contract on explorer
3. `getTransactionStatus(txHash, chainId)` - Check transaction status
4. `estimateGasFees(operation, chainId)` - Calculate gas costs
5. `createWallet()` - Generate new wallet
6. `signTransaction(transaction, privateKey)` - Sign transactions
7. `batchTransactions(transactions, chainId)` - Batch multiple transactions
8. `getContractEvents(contractAddress, chainId)` - Fetch contract events
9. `getTokenBalance(tokenAddress, walletAddress, chainId)` - Get token balance
10. `transferTokens(fromAddress, toAddress, amount, chainId)` - Transfer tokens

Features:
- Multi-chain support with chain-specific optimizations
- Automatic retry mechanism
- Gas price optimization
- Transaction queuing
- Error handling and logging
- Security best practices
- Configuration management
- Monitoring and alerting

Use ethers.js for Ethereum-compatible chains and appropriate SDKs for others.
```

### Prompt 7: AI-Powered Dashboard Component

```
Create a comprehensive React dashboard component for AI-powered asset analysis with the following specifications:

Component Name: AIAnalysisDashboard
Purpose: Display real-time AI analysis results and recommendations

Features:
1. Real-time asset analysis display
2. AI confidence scoring with visual indicators
3. Tokenization recommendations
4. Risk assessment visualization
5. Compliance status tracking
6. Pricing analysis charts
7. Blockchain recommendations
8. Interactive AI chat interface
9. Progress tracking for AI operations
10. Export functionality for reports

Data Visualization:
- Charts with Recharts library
- Progress bars and circular indicators
- Color-coded status indicators
- Interactive tooltips
- Responsive grid layout
- Dark/light theme support

AI Integration:
- WebSocket connection for real-time updates
- AI response streaming
- Confidence score animations
- Recommendation prioritization
- Interactive AI suggestions
- Historical analysis tracking

Include proper loading states, error handling, and accessibility features.
Use modern React patterns with hooks and context API.
```

### Prompt 8: Complete Authentication System

```
Create a comprehensive authentication system with the following specifications:

Components needed:
1. JWT-based authentication middleware
2. User registration and login endpoints
3. Password hashing with bcrypt
4. Role-based access control (RBAC)
5. Token refresh mechanism
6. Password reset functionality
7. Email verification system
8. Rate limiting for auth endpoints
9. Security logging and monitoring
10. Frontend auth context and hooks

Backend Requirements:
- Express.js middleware for auth
- Secure password handling
- Token management
- Session management
- Security headers
- Input validation
- Audit logging

Frontend Requirements:
- React context for auth state
- Login/register forms
- Protected routes
- Token management
- Automatic token refresh
- Error handling
- Loading states

Security Features:
- Password strength validation
- Account lockout after failed attempts
- IP-based restrictions
- Two-factor authentication support
- Security event logging
- Cross-site forgery protection

Include comprehensive error handling and user feedback.
```

## 🔧 Quick Implementation Commands

### Database Setup
```bash
# Initialize Prisma
npx prisma init

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed database
npx prisma db seed
```

### AI Integration Setup
```bash
# Set up environment variables
echo "OPENAI_API_KEY=your-key-here" >> .env
echo "ANTHROPIC_API_KEY=your-key-here" >> .env

# Test AI connection
curl -H "Authorization: Bearer $OPENAI_API_KEY" \
  https://api.openai.com/v1/models
```

### Blockchain Setup
```bash
# Test blockchain connections
curl -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  https://mainnet.infura.io/v3/YOUR-PROJECT-ID
```

### Development Server
```bash
# Start backend development server
npm run dev

# Start frontend development server (in another terminal)
cd frontend && npm start
```

## 📚 Component Library Generation

### UI Components Prompt
```
Generate a complete React component library for a professional tokenization platform with the following components:

1. Button - Multiple variants (primary, secondary, danger, ghost)
2. Input - Text, number, password, email with validation
3. Select - Dropdown with search functionality
4. Card - Container with header, body, footer
5. Modal - Overlay with animation
6. Table - Sortable, filterable, paginated
7. Chart - Various chart types with Recharts
8. Progress - Linear and circular progress indicators
9. Toast - Notification system
10. LoadingSpinner - Various loading states
11. Avatar - User profile images
12. Badge - Status indicators
13. Tabs - Tabbed navigation
14. Accordion - Collapsible content
15. Tooltip - Information overlays

Requirements:
- TypeScript support
- Responsive design
- Accessibility compliance
- Theme support (dark/light)
- Animation with Framer Motion
- Consistent styling system
- Props documentation
- Storybook integration ready
```

## 🚀 Deployment Automation

### Docker Setup Prompt
```
Create a complete Docker setup for the CopymAI RWA tokenization platform with the following specifications:

Required Files:
1. Dockerfile for backend (Node.js/Express)
2. Dockerfile for frontend (React)
3. docker-compose.yml for local development
4. docker-compose.prod.yml for production
5. .dockerignore files
6. nginx.conf for reverse proxy
7. Environment configuration files

Features:
- Multi-stage builds for optimization
- Production-ready configuration
- Health checks
- Volume management
- Network configuration
- Environment variable management
- SSL/TLS support
- Database integration (PostgreSQL)
- Redis for caching
- Monitoring and logging

Include deployment scripts and documentation.
```

## 📊 Testing Framework Setup

### Testing Prompt
```
Create a comprehensive testing framework for the CopymAI platform with the following specifications:

Backend Testing:
1. Unit tests for AI agents
2. Integration tests for API endpoints
3. Database testing with test database
4. Security testing for authentication
5. Performance testing for AI operations
6. Mock external API calls

Frontend Testing:
1. Component unit tests with React Testing Library
2. Integration tests for user flows
3. E2E tests with Cypress
4. Performance testing
5. Accessibility testing
6. Visual regression testing

Testing Tools:
- Jest for JavaScript testing
- Supertest for API testing
- React Testing Library for component testing
- Cypress for E2E testing
- Jest coverage reports
- Continuous integration setup

Include test data fixtures and comprehensive test scenarios.
```

## 🔍 Monitoring and Analytics

### Monitoring Setup Prompt
```
Create a comprehensive monitoring and analytics system for the CopymAI platform with the following specifications:

Backend Monitoring:
1. API performance monitoring
2. Database query performance
3. AI operation tracking
4. Blockchain transaction monitoring
5. Error logging and alerting
6. Security event monitoring
7. Resource usage tracking

Frontend Monitoring:
1. User interaction tracking
2. Performance metrics
3. Error boundary monitoring
4. Page load analytics
5. Conversion funnel tracking
6. User session recording

Tools Integration:
- Winston for logging
- Prometheus for metrics
- Grafana for dashboards
- Sentry for error tracking
- Google Analytics for user tracking
- Custom analytics dashboard

Include alerting rules and incident response procedures.
```

## 📝 Quick Reference Commands

### Development Workflow
```bash
# Start development environment
npm run dev:all

# Run tests
npm test

# Build for production
npm run build

# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:production
```

### Database Operations
```bash
# Reset database
npx prisma migrate reset

# Deploy migrations
npx prisma migrate deploy

# Generate client
npx prisma generate

# Studio GUI
npx prisma studio
```

### AI Operations
```bash
# Test AI endpoints
curl -X POST http://localhost:5000/api/ai/analyze \
  -H "Content-Type: application/json" \
  -d '{"assetType": "REAL_ESTATE", "value": 1000000}'

# Monitor AI logs
tail -f logs/ai.log
```

## 🎯 Success Metrics

Track these metrics to measure implementation success:

### Technical Metrics
- [ ] API response time < 200ms
- [ ] AI analysis completion < 30 seconds
- [ ] Database query time < 100ms
- [ ] Frontend load time < 3 seconds
- [ ] Test coverage > 90%
- [ ] Zero critical security vulnerabilities

### Business Metrics
- [ ] User registration conversion > 15%
- [ ] Asset tokenization completion > 80%
- [ ] User satisfaction score > 4.5/5
- [ ] Platform uptime > 99.9%
- [ ] AI recommendation accuracy > 85%

---

*This prompt-to-code setup is designed to maximize development efficiency with AI assistants. Update and customize prompts based on your specific requirements and preferences.* 