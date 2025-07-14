# 🚀 CopymAI RWA Tokenization Platform - Setup Instructions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **MySQL** (version 8.0 or higher)
- **Git**

### Optional (but recommended):
- **Redis** (for caching)
- **Docker** (for containerized deployment)

## 🛠️ Quick Setup (5 Minutes)

### Step 1: Database Setup

1. **Install MySQL** (if not already installed):
   - Windows: Download from [mysql.com](https://dev.mysql.com/downloads/mysql/)
   - macOS: `brew install mysql`
   - Linux: `sudo apt-get install mysql-server`

2. **Create database**:
   ```bash
   # Start MySQL service
   # Windows: Search "Services" and start MySQL
   # macOS: brew services start mysql
   # Linux: sudo systemctl start mysql

   # Connect to MySQL and create database
   mysql -u root -p
   CREATE DATABASE copymai_tokenization;
   CREATE DATABASE copymai_test;
   EXIT;
   ```

### Step 2: Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd copymai-landing/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file**:
   ```bash
   # Copy the environment template
   copy ..\environment.txt .env
   # On Mac/Linux: cp ../environment.txt .env
   ```

4. **Edit the .env file** with your database credentials:
   ```bash
   # Open .env file in your editor and update:
   DATABASE_URL="mysql://root:your_password@localhost:3306/copymai_tokenization"
   JWT_SECRET="your-super-secret-jwt-key-12345"
   ```

5. **Setup database**:
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Push database schema to MySQL
   npx prisma db push

   # Seed database with sample data
   npm run seed
   ```

6. **Start backend server**:
   ```bash
   npm run dev
   ```

   ✅ **Backend should now be running on http://localhost:5000**

### Step 3: Frontend Setup (New Terminal)

1. **Navigate to frontend directory**:
   ```bash
   cd copymai-landing
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Start frontend server**:
   ```bash
   npm run dev
   ```

   ✅ **Frontend should now be running on http://localhost:3000**

## 🎉 You're Ready!

### Test the Platform:

1. **Visit** http://localhost:3000
2. **Backend API docs** available at http://localhost:5000/api-docs
3. **Health check** at http://localhost:5000/health

### Demo Users (for testing):

- **Admin**: admin@copymai.ai / admin123456
- **Asset Manager**: manager@copymai.ai / manager123456
- **Investor**: demo@investor.com / investor123456

## 🔧 Configuration Options

### Environment Variables

Create a `.env` file in the `backend` directory with these variables:

```bash
# Required - Database
DATABASE_URL="postgresql://username:password@localhost:5432/copymai_dev"
JWT_SECRET="your-secret-key-here"

# Required - Server
PORT=5000
NODE_ENV=development
FRONTEND_URL="http://localhost:3000"

# Optional - AI Features (for full functionality)
OPENAI_API_KEY="your-openai-key"
ANTHROPIC_API_KEY="your-anthropic-key"

# Optional - Blockchain (for tokenization features)
ETHEREUM_RPC_URL="https://mainnet.infura.io/v3/your-project-id"
POLYGON_RPC_URL="https://polygon-mainnet.infura.io/v3/your-project-id"
```

### Getting API Keys (Optional):

1. **OpenAI API Key**: Visit [platform.openai.com](https://platform.openai.com/api-keys)
2. **Anthropic API Key**: Visit [console.anthropic.com](https://console.anthropic.com/)
3. **Infura Project ID**: Visit [infura.io](https://infura.io/)

## 📊 What You Get

### ✅ Working Features:

1. **User Authentication**: Registration, login, profile management
2. **Asset Management**: Create, view, and manage tokenizable assets
3. **Database**: Complete database schema with sample data
4. **API Documentation**: Swagger UI with all endpoints
5. **Frontend**: React app with landing page and components
6. **File Upload**: Asset document and image upload
7. **Role-Based Access**: Admin, Asset Manager, Investor roles

### 🚧 AI Features (Require API Keys):

1. **Asset Analysis**: AI-powered tokenization recommendations
2. **Compliance Checking**: Automated regulatory compliance
3. **Price Analysis**: Market analysis and tokenomics
4. **Blockchain Selection**: Optimal blockchain recommendations

### 🔗 Blockchain Features (Require Setup):

1. **Multi-chain Support**: Ethereum, Polygon, BSC, Avalanche
2. **Smart Contract Generation**: Automated contract creation
3. **Token Deployment**: Deploy tokens to blockchain
4. **Transaction Management**: Track blockchain transactions

## 🐛 Troubleshooting

### Common Issues:

#### 1. Database Connection Error
```bash
# Check if PostgreSQL is running
# Windows: Check Services
# Mac: brew services list | grep postgresql
# Linux: sudo systemctl status postgresql

# Verify database exists
psql -U your_username -l
```

#### 2. Port Already in Use
```bash
# Kill process on port 5000 (backend)
# Windows: netstat -ano | findstr :5000
# Mac/Linux: lsof -ti:5000 | xargs kill

# Or change port in .env file
PORT=5001
```

#### 3. Module Not Found Errors
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### 4. Prisma Issues
```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Generate client
npx prisma generate

# Push schema changes
npx prisma db push
```

### 📱 Development Commands

#### Backend Commands:
```bash
cd copymai-landing/backend

# Development server with auto-reload
npm run dev

# Production server
npm start

# Database operations
npx prisma studio          # Visual database editor
npx prisma migrate dev      # Create new migration
npx prisma db seed         # Seed database
npx prisma generate        # Generate Prisma client

# Testing
npm test                   # Run tests
npm run lint              # Check code style
```

#### Frontend Commands:
```bash
cd copymai-landing

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

## 🌐 Production Deployment

### Backend Deployment:

1. **Set production environment variables**
2. **Use production database (PostgreSQL)**
3. **Set NODE_ENV=production**
4. **Configure reverse proxy (nginx)**
5. **Enable SSL/TLS**

### Frontend Deployment:

1. **Build for production**: `npm run build`
2. **Deploy build folder to web server**
3. **Configure routing for SPA**

## 📚 Next Steps

1. **Add AI API Keys** for full AI functionality
2. **Set up blockchain RPC endpoints** for tokenization features
3. **Configure file storage** (AWS S3) for production
4. **Set up monitoring** and logging
5. **Implement email notifications**
6. **Add payment processing**

## 🆘 Getting Help

- **Check logs**: Backend logs are in `backend/logs/`
- **API Documentation**: Visit http://localhost:5000/api-docs
- **Database GUI**: Run `npx prisma studio`
- **Network Issues**: Check firewall and antivirus settings

## 📝 Additional Resources

- [Implementation Roadmap](./IMPLEMENTATION_ROADMAP.md)
- [Prompt-to-Code Setup](./PROMPT_TO_CODE_SETUP.md)
- [API Documentation](http://localhost:5000/api-docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [React Documentation](https://react.dev)

---

🎉 **Congratulations!** You now have a fully functional AI-powered RWA tokenization platform running locally. The platform includes user authentication, asset management, AI integration capabilities, and a modern React frontend.

**Ready to build the future of asset tokenization!** 🚀 