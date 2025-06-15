import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExternalLinkAlt 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'fallback', null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS is configured
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // If EmailJS is not configured, use mailto fallback
    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id' || serviceId === 'your_service_id_here') {
      handleMailtoFallback();
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'akhibumearshaik@gmail.com',
        reply_to: formData.email
      };

      console.log('Sending email with EmailJS...', {
        serviceId: serviceId.substring(0, 5) + '...',
        templateId: templateId.substring(0, 5) + '...',
        publicKey: publicKey.substring(0, 5) + '...'
      });

      // Send email
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error response:', error.response || error.text || error.message);
      
      // Fallback to mailto
      handleMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const mailtoSubject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:akhibumearshaik@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    setSubmitStatus('fallback');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Whether you have a question about my work 
                or want to explore how we can work together, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: FaEnvelope, label: 'Email', value: 'akhibumearshaik@gmail.com', href: 'mailto:akhibumearshaik@gmail.com' },
                { icon: FaPhone, label: 'Phone', value: '+91 8019125787', href: 'tel:+918019125787' },
                { icon: FaMapMarkerAlt, label: 'Location', value: 'Hyderabad, India', href: '#' }
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  href={contact.href}
                  className="flex items-center space-x-4 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/50 dark:border-purple-500/20 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <contact.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-slate-800/80 dark:to-purple-900/40 backdrop-blur-sm rounded-lg p-6 border border-blue-100/50 dark:border-purple-500/20">
              <h4 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-2">
                Let's Build Something Amazing Together
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                From AI/ML solutions to full-stack applications, I'm here to help bring your ideas to life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-purple-500/20"
          >
            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            {/* Success/Error/Fallback Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3"
              >
                <FaCheckCircle className="text-green-600 dark:text-green-400" />
                <div>
                  <p className="text-green-800 dark:text-green-200 font-medium">Message sent successfully!</p>
                  <p className="text-green-600 dark:text-green-300 text-sm">I'll get back to you soon.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'fallback' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex items-center space-x-3"
              >
                <FaExternalLinkAlt className="text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-blue-800 dark:text-blue-200 font-medium">Email client opened!</p>
                  <p className="text-blue-600 dark:text-blue-300 text-sm">Your message has been prepared in your default email app.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
              >
                <p className="text-red-800 dark:text-red-200 font-medium">Failed to send message</p>
                <p className="text-red-600 dark:text-red-300 text-sm">Please try again or contact me directly via email.</p>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300/50 dark:border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-gray-900 dark:text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300/50 dark:border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-gray-900 dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300/50 dark:border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-gray-900 dark:text-white transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300/50 dark:border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                If EmailJS isn't set up, this will open your default email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 