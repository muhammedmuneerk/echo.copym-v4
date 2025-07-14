import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Assignment,
  Business,
  Description,
  SmartToy,
  CheckCircle,
  Error,
  CloudUpload,
  Image,
  Delete,
  AccountBalance,
  Palette,
  Diamond,
  TrendingUp,
  LocalBar,
  Psychology,
  Copyright,
  Category
} from '@mui/icons-material';

const AssetTokenizationWizard = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    totalValue: '',
    description: '',
    location: '',
    minimumInvestment: 100,
    expectedInvestors: '',
    geographicReach: 'Global',
    complianceLevel: 'Standard',
    documents: [],
    images: []
  });
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API error handler
  const handleApiError = (error) => {
    console.error('API Error:', error);
    if (error.response?.status === 401) {
      return 'Authentication required. Please login first.';
    } else if (error.response?.status === 403) {
      return 'Permission denied. You may not have access to this feature.';
    } else if (error.response?.status === 500) {
      return 'Server error. Please try again later.';
    } else if (error.code === 'ECONNREFUSED') {
      return 'Cannot connect to server. Please ensure the backend is running.';
    } else {
      return error.response?.data?.message || error.message || 'An unexpected error occurred.';
    }
  };

  const steps = [
    { id: 1, title: 'Asset Information', icon: <Assignment /> },
    { id: 2, title: 'Asset Details', icon: <Business /> },
    { id: 3, title: 'Documentation', icon: <Description /> },
    { id: 4, title: 'AI Analysis', icon: <SmartToy /> },
    { id: 5, title: 'Review & Submit', icon: <CheckCircle /> }
  ];

  const assetCategories = [
    { value: 'REAL_ESTATE', label: 'Real Estate', description: 'Commercial and residential properties', icon: <AccountBalance /> },
    { value: 'FINE_ART', label: 'Fine Art', description: 'Paintings, sculptures, and collectible art', icon: <Palette /> },
    { value: 'LUXURY_GOODS', label: 'Luxury Goods', description: 'Watches, jewelry, and luxury items', icon: <Diamond /> },
    { value: 'COMMODITIES', label: 'Commodities', description: 'Gold, silver, and other precious metals', icon: <TrendingUp /> },
    { value: 'COLLECTIBLES', label: 'Collectibles', description: 'Rare items, antiques, and memorabilia', icon: <Category /> },
    { value: 'WINE_SPIRITS', label: 'Wine & Spirits', description: 'Fine wines and premium spirits', icon: <LocalBar /> },
    { value: 'INTELLECTUAL_PROPERTY', label: 'Intellectual Property', description: 'Patents, trademarks, and copyrights', icon: <Copyright /> },
    { value: 'OTHER', label: 'Other', description: 'Other investment-grade assets', icon: <Psychology /> }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (type, files) => {
    setFormData(prev => ({
      ...prev,
      [type]: [...prev[type], ...files]
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.name && formData.category && formData.totalValue && formData.description.length >= 50;
      case 2:
        return formData.location && formData.minimumInvestment >= 100;
      case 3:
        return formData.documents.length > 0 || formData.images.length > 0;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const analyzeAsset = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate AI analysis for demo purposes
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      
      const mockAnalysis = {
        tokenizationPlan: {
          confidence: 87,
          strategy: {
            summary: `Based on your ${formData.category.toLowerCase().replace('_', ' ')} asset valued at $${parseInt(formData.totalValue).toLocaleString()}, our AI recommends a fractional ownership model with smart contract automation. This asset shows strong tokenization potential with expected high liquidity and investor interest.`
          }
        },
        estimatedTimeline: {
          total: '13-20 days'
        },
        nextSteps: [
          {
            step: 'Legal Structure Setup',
            description: 'Establish appropriate legal framework for tokenization'
          },
          {
            step: 'Smart Contract Development',
            description: 'Create and deploy blockchain smart contracts'
          },
          {
            step: 'Compliance Verification',
            description: 'Ensure regulatory compliance and KYC requirements'
          },
          {
            step: 'Market Launch',
            description: 'List tokens on the marketplace for investment'
          }
        ]
      };

      setAnalysis(mockAnalysis);
      nextStep();
    } catch (err) {
      setError('Analysis simulation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const submitTokenization = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate asset creation for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5 second delay
      
      const mockAsset = {
        id: 'asset_' + Date.now(),
        name: formData.name,
        category: formData.category,
        totalValue: parseFloat(formData.totalValue),
        minimumInvestment: parseFloat(formData.minimumInvestment),
        status: 'PENDING_REVIEW',
        analysisData: analysis
      };

      onComplete(mockAsset);
    } catch (err) {
      setError('Tokenization submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3>Asset Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Asset Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g., Manhattan Commercial Property"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Asset Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="form-select"
                >
                  <option value="">Select Category</option>
                  {assetCategories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                {formData.category && (
                  <p className="form-help">
                    {assetCategories.find(c => c.value === formData.category)?.description}
                  </p>
                )}
              </div>
              
              <div className="form-group">
                <label>Total Asset Value (USD) *</label>
                <input
                  type="number"
                  value={formData.totalValue}
                  onChange={(e) => handleInputChange('totalValue', e.target.value)}
                  placeholder="e.g., 2500000"
                  min="1000"
                  className="form-input"
                />
              </div>
              
              <div className="form-group full-width">
                <label>Asset Description * (min 50 characters)</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Detailed description of the asset including its characteristics, value drivers, and investment potential..."
                  rows="4"
                  className="form-textarea"
                />
                <p className="form-help">
                  {formData.description.length}/50 characters minimum
                </p>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="step-content">
            <h3>Asset Details</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Location *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="e.g., New York, NY, USA"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Minimum Investment (USD) *</label>
                <input
                  type="number"
                  value={formData.minimumInvestment}
                  onChange={(e) => handleInputChange('minimumInvestment', e.target.value)}
                  placeholder="100"
                  min="100"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Expected Number of Investors</label>
                <input
                  type="number"
                  value={formData.expectedInvestors}
                  onChange={(e) => handleInputChange('expectedInvestors', e.target.value)}
                  placeholder="e.g., 500"
                  min="1"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Geographic Reach</label>
                <select
                  value={formData.geographicReach}
                  onChange={(e) => handleInputChange('geographicReach', e.target.value)}
                  className="form-select"
                >
                  <option value="Local">Local</option>
                  <option value="Regional">Regional</option>
                  <option value="National">National</option>
                  <option value="International">International</option>
                  <option value="Global">Global</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Compliance Level</label>
                <select
                  value={formData.complianceLevel}
                  onChange={(e) => handleInputChange('complianceLevel', e.target.value)}
                  className="form-select"
                >
                  <option value="Standard">Standard</option>
                  <option value="Enhanced">Enhanced</option>
                  <option value="Institutional">Institutional</option>
                </select>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="step-content">
            <h3>Documentation</h3>
            <div className="upload-section">
              <div className="upload-group">
                <label>Asset Documents</label>
                <div className="upload-area">
                  <div className="upload-placeholder">
                    <span className="upload-icon"><CloudUpload /></span>
                    <p>Upload legal documents, certificates, appraisals</p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload('documents', Array.from(e.target.files))}
                      className="file-input"
                    />
                  </div>
                </div>
                {formData.documents.length > 0 && (
                  <div className="file-list">
                    {formData.documents.map((file, index) => (
                      <div key={index} className="file-item">
                        <span className="file-name">{file.name}</span>
                        <button
                          onClick={() => setFormData(prev => ({
                            ...prev,
                            documents: prev.documents.filter((_, i) => i !== index)
                          }))}
                          className="remove-file"
                        >
                          <Delete />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="upload-group">
                <label>Asset Images</label>
                <div className="upload-area">
                  <div className="upload-placeholder">
                    <span className="upload-icon"><Image /></span>
                    <p>Upload high-quality images of the asset</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleFileUpload('images', Array.from(e.target.files))}
                      className="file-input"
                    />
                  </div>
                </div>
                {formData.images.length > 0 && (
                  <div className="image-preview">
                    {formData.images.map((file, index) => (
                      <div key={index} className="image-item">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Asset ${index + 1}`}
                          className="preview-image"
                        />
                        <button
                          onClick={() => setFormData(prev => ({
                            ...prev,
                            images: prev.images.filter((_, i) => i !== index)
                          }))}
                          className="remove-image"
                        >
                          <Delete />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="step-content">
            <h3>AI Analysis</h3>
            {loading ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>CopymAI is analyzing your asset...</p>
                <p>This may take a few moments.</p>
              </div>
            ) : analysis ? (
              <div className="analysis-results">
                <div className="analysis-header">
                  <h4>Analysis Complete!</h4>
                  <div className="confidence-score">
                    <span>Confidence: {analysis.tokenizationPlan.confidence || 85}%</span>
                  </div>
                </div>
                
                <div className="analysis-sections">
                  <div className="analysis-section">
                    <h5>Tokenization Strategy</h5>
                    <p>{analysis.tokenizationPlan.strategy?.summary || 'Comprehensive tokenization plan generated'}</p>
                  </div>
                  
                  <div className="analysis-section">
                    <h5>Estimated Timeline</h5>
                    <p>{analysis.estimatedTimeline?.total || '13-20 days'}</p>
                  </div>
                  
                  <div className="analysis-section">
                    <h5>Next Steps</h5>
                    <ul>
                      {analysis.nextSteps?.map((step, index) => (
                        <li key={index}>
                          <strong>{step.step}:</strong> {step.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="analysis-prompt">
                <p>Ready to analyze your asset with CopymAI?</p>
                <p>Our AI will evaluate tokenization potential, generate compliance requirements, and create a detailed implementation plan.</p>
                <button
                  onClick={analyzeAsset}
                  className="analyze-button"
                  disabled={loading}
                >
                  Start AI Analysis
                </button>
              </div>
            )}
          </div>
        );
      
      case 5:
        return (
          <div className="step-content">
            <h3>Review & Submit</h3>
            <div className="review-sections">
              <div className="review-section">
                <h5>Asset Overview</h5>
                <div className="review-grid">
                  <div className="review-item">
                    <label>Name:</label>
                    <span>{formData.name}</span>
                  </div>
                  <div className="review-item">
                    <label>Category:</label>
                    <span>{assetCategories.find(c => c.value === formData.category)?.label}</span>
                  </div>
                  <div className="review-item">
                    <label>Value:</label>
                    <span>${parseInt(formData.totalValue).toLocaleString()}</span>
                  </div>
                  <div className="review-item">
                    <label>Location:</label>
                    <span>{formData.location}</span>
                  </div>
                </div>
              </div>
              
              {analysis && (
                <div className="review-section">
                  <h5>AI Analysis Summary</h5>
                  <div className="summary-grid">
                    <div className="summary-item">
                      <label>Confidence Score:</label>
                      <span>{analysis.tokenizationPlan.confidence || 85}%</span>
                    </div>
                    <div className="summary-item">
                      <label>Estimated Timeline:</label>
                      <span>{analysis.estimatedTimeline?.total || '13-20 days'}</span>
                    </div>
                    <div className="summary-item">
                      <label>Next Steps:</label>
                      <span>{analysis.nextSteps?.length || 0} action items</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="review-section">
                <h5>Documentation</h5>
                <div className="doc-summary">
                  <p>Documents: {formData.documents.length} files</p>
                  <p>Images: {formData.images.length} files</p>
                </div>
              </div>
            </div>
            
            <div className="submit-actions">
              <button
                onClick={submitTokenization}
                disabled={loading}
                className="submit-button"
              >
                {loading ? 'Submitting...' : 'Submit for Tokenization'}
              </button>
              <p className="submit-note">
                By submitting, you agree to our terms and conditions. Your asset will be reviewed by our team.
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="tokenization-wizard">
      <div className="wizard-header">
        <h2>Asset Tokenization Wizard</h2>
        <p>Let CopymAI guide you through the tokenization process</p>
      </div>
      
      <div className="wizard-progress">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`progress-step ${currentStep >= step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
          >
            <div className="step-icon">{step.icon}</div>
            <div className="step-title">{step.title}</div>
          </div>
        ))}
      </div>
      
      <div className="wizard-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {error && (
        <div className="error-message">
          <span className="error-icon"><Error /></span>
          <p>{error}</p>
        </div>
      )}
      
      <div className="wizard-actions">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="action-button secondary"
        >
          Previous
        </button>
        
        <button
          onClick={onCancel}
          className="action-button cancel"
        >
          Cancel
        </button>
        
        {currentStep < 4 && (
          <button
            onClick={nextStep}
            disabled={!validateStep(currentStep)}
            className="action-button primary"
          >
            Next
          </button>
        )}
        
        {currentStep === 4 && !analysis && (
          <button
            onClick={analyzeAsset}
            disabled={loading}
            className="action-button primary"
          >
            {loading ? 'Analyzing...' : 'Analyze Asset'}
          </button>
        )}
      </div>
    </div>
  );
};

export default AssetTokenizationWizard; 