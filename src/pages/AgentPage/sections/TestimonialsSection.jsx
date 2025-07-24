import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  AccountBalance, 
  AutoAwesome, 
  Palette, 
  Verified 
} from '@mui/icons-material';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Investment Director',
      company: 'Venture Capital Partners',
      content: 'CopymAI democratizes high-value asset investment. The AI predictions have consistently outperformed traditional analysis by 23%.',
      avatar: <AccountBalance sx={{ fontSize: 40 }} />
    },
    {
      name: 'Michael Rodriguez',
      role: 'Portfolio Manager',
      company: 'Wealth Management Group',
      content: 'Finally, a platform that makes RWA investment accessible to everyone. CopymAI\'s tokenization process is seamless and secure.',
      avatar: <AutoAwesome sx={{ fontSize: 40 }} />
    },
    {
      name: 'Emily Thompson',
      role: 'Chief Technology Officer',
      company: 'FinTech Solutions',
      content: 'The CopymAgent AI provides unprecedented insights into asset performance. This is the future of investment platforms.',
      avatar: <Palette sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="relative overflow-hidden py-12 sm:py-16 md:py-20"
      style={{
        background: 'black'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(74, 222, 128, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="brand-section-title mb-4 sm:mb-6 text-white flex items-center justify-center gap-2 sm:gap-4 text-center">
            <Verified className="text-green-400" sx={{ fontSize: 24 }} />
            What Industry Leaders Say
          </h2>
          <p className="brand-description max-w-3xl mx-auto text-gray-300 px-4 sm:px-0 text-center">
            Real feedback from investment professionals and technology experts
          </p>
        </motion.div>
        
        <div className="space-y-12 sm:space-y-16">
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12 sm:mb-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-black/30 relative overflow-hidden backdrop-blur-md group hover:border-green-400/30 transition-all duration-500"
          >
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')`
              }}
            />
            
            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <Star className="text-green-400 text-3xl sm:text-4xl md:text-5xl animate-pulse" />
              </div>
              
              <blockquote className="brand-description text-white text-center mb-8 sm:mb-10 leading-relaxed italic relative px-4 sm:px-8 text-sm sm:text-base md:text-lg">
                <span className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-3xl sm:text-4xl md:text-6xl text-green-400 opacity-30 font-serif">"</span>
                CopymAI democratizes high-value asset investment. The AI predictions have consistently outperformed traditional analysis by 23%. This is the future of investment platforms.
                <span className="absolute -bottom-4 sm:-bottom-8 -right-2 sm:-right-4 text-3xl sm:text-4xl md:text-6xl text-green-400 opacity-30 font-serif">"</span>
              </blockquote>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
                <div className="flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <AccountBalance className="text-green-400 text-3xl sm:text-4xl md:text-5xl" />
                </div>
                <div>
                  <h4 className="brand-card-title text-white text-center">Sarah Chen</h4>
                  <p className="brand-description text-gray-400 font-medium text-center">Investment Director</p>
                  <p className="brand-description text-gray-500 text-center">Venture Capital Partners</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile: Horizontal scrollable testimonials */}
          <div className="block lg:hidden">
            <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 -mx-4 px-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 transition-all duration-400 ease-out hover:-translate-y-2 hover:border-green-400/30 hover:shadow-2xl hover:shadow-green-400/15 hover:from-gray-700 hover:to-gray-800 relative overflow-hidden backdrop-blur-md group flex-shrink-0 w-80"
                >
                  {/* Top border gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 text-sm sm:text-base" />
                      ))}
                    </div>
                    <div className="flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110">
                      {testimonial.avatar}
                    </div>
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <blockquote className="brand-description text-gray-300 leading-relaxed text-sm sm:text-base italic relative pl-4 text-center sm:text-left">
                      <span className="absolute left-0 top-0 text-xl sm:text-2xl text-green-400 opacity-50 font-serif">"</span>
                      {testimonial.content}
                    </blockquote>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-white/10 gap-2 sm:gap-0">
                    <div className="text-center sm:text-left">
                      <h4 className="brand-card-title text-white mb-1 text-center sm:text-left">{testimonial.name}</h4>
                      <p className="brand-description text-green-400 font-medium text-xs sm:text-sm mb-1 text-center sm:text-left">{testimonial.role}</p>
                      <p className="brand-description text-gray-400 text-xs text-center sm:text-left">{testimonial.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 text-xs brand-description">
                      <Verified className="text-sm" />
                      <span>Verified Professional</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Testimonials Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-400 ease-out hover:-translate-y-2 hover:border-green-400/30 hover:shadow-2xl hover:shadow-green-400/15 hover:from-gray-700 hover:to-gray-800 relative overflow-hidden backdrop-blur-md group"
              >
                {/* Top border gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 text-sm sm:text-base" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110">
                    {testimonial.avatar}
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <blockquote className="brand-description text-gray-300 leading-relaxed text-sm sm:text-base italic relative pl-4 text-center sm:text-left">
                    <span className="absolute left-0 top-0 text-xl sm:text-2xl text-green-400 opacity-50 font-serif">"</span>
                    {testimonial.content}
                  </blockquote>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-white/10 gap-2 sm:gap-0">
                  <div className="text-center sm:text-left">
                    <h4 className="brand-card-title text-white mb-1 text-center sm:text-left">{testimonial.name}</h4>
                    <p className="brand-description text-green-400 font-medium text-xs sm:text-sm mb-1 text-center sm:text-left">{testimonial.role}</p>
                    <p className="brand-description text-gray-400 text-xs text-center sm:text-left">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-xs brand-description">
                    <Verified className="text-sm" />
                    <span>Verified Professional</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center px-4"
          >
            <div className="mb-8 sm:mb-12">
              <h3 className="brand-section-title text-white mb-4 text-center">Trusted by Industry Leaders</h3>
              <p className="brand-description text-gray-300 text-center">Join thousands of professionals already using CopymAI</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                { number: '500+', label: 'Investment Professionals' },
                { number: '50+', label: 'Financial Institutions' },
                { number: '98%', label: 'Satisfaction Rate' },
                { number: '4.9/5', label: 'Average Rating' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-2xl p-3 sm:p-4 md:p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/10"
                >
                  <div className="brand-card-title text-green-400 mb-2 text-center text-sm sm:text-base md:text-lg">
                    {stat.number}
                  </div>
                  <div className="brand-description text-gray-300 font-medium uppercase tracking-wider text-center text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection; 