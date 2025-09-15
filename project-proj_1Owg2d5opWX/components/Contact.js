function Contact() {
  try {
    const contactInfo = [
      {
        icon: 'mail',
        label: 'Email',
        value: 'lebesephindile46@gmail.com',
        href: 'mailto:lebesephindile46@gmail.com',
        color: 'bg-blue-500'
      },
      {
        icon: 'phone',
        label: 'Phone',
        value: '063 133 7955',
        href: 'tel:0631337955',
        color: 'bg-green-500'
      },
      {
        icon: 'map-pin',
        label: 'Location',
        value: 'Vosloorus, South Africa',
        href: null,
        color: 'bg-purple-500'
      },
      {
        icon: 'linkedin',
        label: 'LinkedIn',
        value: 'Connect on LinkedIn',
        href: 'https://www.linkedin.com/in/norah-phindile-lebese-4793b0379/',
        color: 'bg-blue-600'
      },
      {
        icon: 'github',
        label: 'GitHub',
        value: 'View GitHub Profile',
        href: 'https://github.com/PHINDILE1996',
        color: 'bg-gray-700'
      }
    ];
    
    return (
      <section id="contact" className="section-padding bg-white relative overflow-hidden" 
               data-name="contact" data-file="components/Contact.js">
        <div className="absolute inset-0 wave-pattern opacity-80"></div>
        <div className="absolute inset-0 floating-orbs opacity-30"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Get In Touch</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Ready to collaborate or discuss opportunities? I'd love to hear from you!
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Let's Connect</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    I'm currently available for new opportunities and exciting projects in AI, 
                    data science, and technology innovation. Whether you're looking for collaboration, 
                    consultation, or just want to discuss the latest in artificial intelligence, 
                    I'm here to help.
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Feel free to reach out through any of the channels listed, and I'll get back 
                    to you as soon as possible. Let's create something amazing together!
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-[var(--accent-color)] rounded-lg flex items-center justify-center mr-3">
                      <div className="icon-star text-white text-sm"></div>
                    </div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Available for</h4>
                  </div>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li className="flex items-center">
                      <div className="icon-check text-green-500 text-sm mr-2"></div>
                      Full-time opportunities
                    </li>
                    <li className="flex items-center">
                      <div className="icon-check text-green-500 text-sm mr-2"></div>
                      Project collaborations
                    </li>
                    <li className="flex items-center">
                      <div className="icon-check text-green-500 text-sm mr-2"></div>
                      Consulting work
                    </li>
                    <li className="flex items-center">
                      <div className="icon-check text-green-500 text-sm mr-2"></div>
                      Speaking engagements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} 
                       className="card-glow p-6 fade-in hover:scale-105 transition-transform"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mr-4 glow-effect`}>
                        <div className={`icon-${item.icon} text-xl text-white`}></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-1">{item.label}</h4>
                        {item.href ? (
                          <a href={item.href} 
                             className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] 
                                      transition-colors font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-[var(--text-secondary)]">{item.value}</span>
                        )}
                      </div>
                      {item.href && (
                        <div className="icon-external-link text-[var(--text-secondary)] text-sm"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}