import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Close } from '@mui/icons-material';

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    username: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate authentication for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      
      const mockUser = {
        id: 'user_' + Date.now(),
        firstName: formData.firstName || 'Demo',
        lastName: formData.lastName || 'User',
        username: formData.username || 'demouser',
        email: formData.email,
        role: 'INVESTOR'
      };
      
      const mockToken = 'demo_token_' + Date.now();
      
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      onLoginSuccess(mockUser);
      onClose();
    } catch (err) {
      setError('Authentication simulation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    setError('');

    try {
      // Simulate demo login
      await new Promise(resolve => setTimeout(resolve, 800)); // 0.8 second delay
      
      const demoUser = {
        id: 'demo_investor',
        firstName: 'Demo',
        lastName: 'Investor',
        username: 'demoinvestor',
        email: 'demo@investor.com',
        role: 'INVESTOR'
      };
      
      const demoToken = 'demo_token_investor';
      
      localStorage.setItem('token', demoToken);
      localStorage.setItem('user', JSON.stringify(demoUser));
      onLoginSuccess(demoUser);
      onClose();
    } catch (err) {
      setError('Demo login simulation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="auth-modal-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="auth-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="auth-modal-header">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <button onClick={onClose} className="close-button"><Close /></button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                required
                className="form-input"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" disabled={loading} className="auth-button primary">
              {loading ? 'Processing...' : (isLogin ? 'Login' : 'Register')}
            </button>

            <button type="button" onClick={handleDemoLogin} className="auth-button secondary">
              Demo Login
            </button>
          </form>

          <div className="auth-switch">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={() => setIsLogin(!isLogin)} className="switch-button">
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal; 