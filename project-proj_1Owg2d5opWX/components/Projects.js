function Projects() {
  try {
    const projects = [
      {
        title: 'LearnAI-WITH_PHINDI',
        description: 'AI educational chatbot designed for beginners to learn artificial intelligence concepts through interactive conversations and guided learning paths.',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['AI', 'Chatbot', 'Education', 'Voiceflow'],
        icon: 'bot',
        color: 'bg-blue-500',
        demoUrl: 'https://creator.voiceflow.com/prototype/674f5b5e36c7a757a37d2451',
        features: ['Interactive AI Learning', 'Beginner-Friendly Interface', 'Guided Learning Paths'],
        status: 'Live Demo Available'
      },
      {
        title: 'Accessible Education Prototype',
        description: 'Educational platform prototype designed specifically for children with disabilities, focusing on accessibility, user-friendly interfaces, and inclusive learning experiences.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Framer', 'Accessibility', 'Education', 'UX Design'],
        icon: 'heart',
        color: 'bg-green-500',
        demoUrl: 'https://framer.com/projects/Accessible-Education--nxSdVDG7hFmG3lqhAPRb-zN1EE?node=augiA20Il',
        features: ['Inclusive Design', 'Child-Friendly Interface', 'Accessibility Features'],
        status: 'Interactive Prototype'
      },
      {
        title: 'API Documentation & Analysis',
        description: 'Comprehensive technical writing project including API documentation and trade-off analysis for machine learning implementations and chatbot integrations.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Documentation', 'API', 'Technical Writing', 'Analysis'],
        icon: 'file-text',
        color: 'bg-purple-500',
        demoUrl: '#documentation-preview',
        features: ['Comprehensive API Docs', 'ML Trade-off Analysis', 'Technical Writing'],
        status: 'View Documentation'
      }
    ];
    
    return (
      <section id="projects" className="section-padding relative overflow-hidden" 
               data-name="projects" data-file="components/Projects.js">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200"></div>
        <div className="absolute inset-0 aurora-bg opacity-60"></div>
        <div className="absolute inset-0 diamond-pattern opacity-30"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Featured Projects</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Showcasing my work in AI, accessibility, and technical documentation
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} 
                   className="card-glow overflow-hidden fade-in hover:scale-105 transition-transform duration-300"
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className={`w-16 h-16 rounded-full ${project.color} flex items-center justify-center glow-effect`}>
                      <div className={`icon-${project.icon} text-2xl text-white`}></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-[var(--text-secondary)]">
                          <div className="icon-check text-green-500 text-xs mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} 
                            className="px-3 py-1 bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] 
                                     text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Demo Button */}
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} 
                       target={project.demoUrl.startsWith('#') ? '_self' : '_blank'}
                       rel={project.demoUrl.startsWith('#') ? '' : 'noopener noreferrer'}
                       className="flex-1 bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg font-medium 
                                text-center transition-all duration-300 hover:bg-[var(--secondary-color)] 
                                glow-effect text-sm flex items-center justify-center">
                      <div className="icon-play text-sm mr-2"></div>
                      {project.demoUrl.startsWith('#') ? 'View Details' : 'Try Demo'}
                    </a>
                    <button className="px-4 py-2 border-2 border-[var(--primary-color)] text-[var(--primary-color)] 
                                     rounded-lg font-medium transition-all duration-300 hover:bg-[var(--primary-color)] 
                                     hover:text-white text-sm">
                      <div className="icon-info text-sm"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-[var(--text-secondary)] mb-4">
                Interested in collaborating or learning more about my work?
              </p>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <div className="icon-arrow-right text-lg mr-2 inline-block"></div>
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}