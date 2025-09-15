function Footer() {
  try {
    const socialLinks = [
      { icon: 'linkedin', href: 'https://www.linkedin.com/in/norah-phindile-lebese-4793b0379/', label: 'LinkedIn' },
      { icon: 'github', href: 'https://github.com/PHINDILE1996', label: 'GitHub' },
      { icon: 'mail', href: 'mailto:lebesephindile46@gmail.com', label: 'Email' },
      { icon: 'phone', href: 'tel:0631337955', label: 'Phone' }
    ];
    
    const quickLinks = [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Repositories', href: '#repositories' },
      { label: 'Contact', href: '#contact' }
    ];
    
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    return (
      <footer className="bg-[var(--text-primary)] text-white section-padding relative overflow-hidden" 
              data-name="footer" data-file="components/Footer.js">
        <div className="absolute inset-0 particles-bg opacity-20"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center glow-effect">
                  <span className="text-white font-bold text-lg">NL</span>
                </div>
                <span className="font-semibold text-xl">Norah Phindile Lebese</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                AI & Data Science Professional passionate about creating impactful technology solutions. 
                Available for new opportunities and collaborations.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-[var(--primary-color)] transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a key={index}
                     href={link.href}
                     className="flex items-center space-x-3 text-gray-300 hover:text-[var(--primary-color)] 
                              transition-colors text-sm group"
                  >
                    <div className={`icon-${link.icon} text-lg group-hover:text-[var(--primary-color)]`}></div>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400">
              <div className="fade-in">
                <p>&copy; 2025 Norah Phindile Lebese. All rights reserved.</p>
              </div>
              <div className="fade-in mt-4 lg:mt-0" style={{ animationDelay: '0.2s' }}>
                <p>Built with passion for innovation and excellence</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}