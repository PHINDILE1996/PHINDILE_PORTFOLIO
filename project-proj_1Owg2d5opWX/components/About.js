function About() {
  try {
    const stats = [
      { number: '3+', label: 'Years Experience', icon: 'calendar' },
      { number: '15+', label: 'Certifications', icon: 'award' },
      { number: '5+', label: 'Projects Completed', icon: 'folder' },
      { number: '100%', label: 'Client Satisfaction', icon: 'heart' }
    ];
    
    return (
      <section id="about" className="section-padding bg-white relative overflow-hidden" 
               data-name="about" data-file="components/About.js">
        <div className="absolute inset-0 wave-pattern"></div>
        <div className="absolute inset-0 diamond-pattern opacity-40"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">About Me</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Discover my journey in technology and passion for innovation
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="slide-in-left lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                  Professional Summary
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Motivated and detail-oriented professional with experience in retail, marketing, and emerging 
                  technologies such as AI, chatbot development, and data science. I bring a unique blend of 
                  technical expertise and customer service excellence.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  My journey has taken me from customer-facing roles to the cutting edge of artificial intelligence, 
                  where I've developed skills in machine learning, chatbot development, and data analytics. 
                  I'm passionate about leveraging technology to create impactful solutions that make a difference.
                </p>
                
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-[var(--text-primary)] mb-4">Professional Certifications</h4>
                  
                  {/* Latest Certification - Featured */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 glow-effect">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 glow-effect">
                        <div className="icon-award text-white text-sm"></div>
                      </div>
                      <div>
                        <h5 className="font-bold text-[var(--text-primary)]">Latest Certification - 2025</h5>
                        <p className="text-blue-600 font-medium text-sm">Advanced Digital Skills 4 | JHB_July2025</p>
                      </div>
                    </div>
                    <p className="text-[var(--primary-color)] font-bold mb-2">
                      Artificial Intelligence (AI) Bootcamp - DeepLearning.AI
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm mb-3">
                      Comprehensive AI training covering machine learning, neural networks, and ethical AI practices.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['AI/ML', 'Machine Learning', 'Neural Networks', 'Generative AI'].map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Other Certifications Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                          <div className="icon-brain text-white text-sm"></div>
                        </div>
                        <h6 className="font-semibold text-[var(--text-primary)] text-sm">Machine Learning Specialization</h6>
                      </div>
                      <p className="text-[var(--text-secondary)] text-xs mb-2">Stanford University - Coursera</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">ML Algorithms</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Deep Learning</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                          <div className="icon-database text-white text-sm"></div>
                        </div>
                        <h6 className="font-semibold text-[var(--text-primary)] text-sm">Data Science Professional</h6>
                      </div>
                      <p className="text-[var(--text-secondary)] text-xs mb-2">IBM - Coursera</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Python</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Data Analytics</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                          <div className="icon-bot text-white text-sm"></div>
                        </div>
                        <h6 className="font-semibold text-[var(--text-primary)] text-sm">Conversational AI</h6>
                      </div>
                      <p className="text-[var(--text-secondary)] text-xs mb-2">Google - Coursera</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Chatbots</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">NLP</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                          <div className="icon-cloud text-white text-sm"></div>
                        </div>
                        <h6 className="font-semibold text-[var(--text-primary)] text-sm">Azure AI Fundamentals</h6>
                      </div>
                      <p className="text-[var(--text-secondary)] text-xs mb-2">Microsoft</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Azure AI</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Cloud AI</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center mr-3">
                          <div className="icon-code text-white text-sm"></div>
                        </div>
                        <h6 className="font-semibold text-[var(--text-primary)] text-sm">Python for Data Science</h6>
                      </div>
                      <p className="text-[var(--text-secondary)] text-xs mb-2">DataCamp</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded">Python</span>
                        <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded">Pandas</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
                          <div className="icon-chart-bar text-white text-sm"></div>
                        </div>
                        <h6 className="font-semibold text-[var(--text-primary)] text-sm">Business Analytics</h6>
                      </div>
                      <p className="text-[var(--text-secondary)] text-xs mb-2">Wharton - Coursera</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">Analytics</span>
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">Business Intelligence</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Certifications */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-[var(--text-primary)] mb-3 text-sm">Additional Certifications</h6>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-[var(--text-secondary)]">
                      <div className="flex items-center">
                        <div className="icon-check text-green-500 text-xs mr-2"></div>
                        Digital Marketing - Google
                      </div>
                      <div className="flex items-center">
                        <div className="icon-check text-green-500 text-xs mr-2"></div>
                        Project Management - Coursera
                      </div>
                      <div className="flex items-center">
                        <div className="icon-check text-green-500 text-xs mr-2"></div>
                        Customer Service Excellence
                      </div>
                      <div className="flex items-center">
                        <div className="icon-check text-green-500 text-xs mr-2"></div>
                        Agile Methodologies
                      </div>
                      <div className="flex items-center">
                        <div className="icon-check text-green-500 text-xs mr-2"></div>
                        SQL for Data Analysis
                      </div>
                      <div className="flex items-center">
                        <div className="icon-check text-green-500 text-xs mr-2"></div>
                        Leadership Essentials
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-2">Location</h4>
                    <p className="text-[var(--text-secondary)]">Vosloorus, South Africa</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-2">Availability</h4>
                    <p className="text-green-600 font-medium">Available for opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[var(--primary-color)] glow-effect">
                    <img 
                      src="https://app.trickle.so/storage/public/images/usr_1523792d18000001/eed82644-8037-4677-baf4-44d2fe11b583.jpeg" 
                      alt="Norah Phindile Lebese"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center glow-effect">
                    <div className="icon-check text-white text-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 slide-in-right">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} 
                     className="text-center p-6 card-glow" 
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-12 h-12 mx-auto mb-4 bg-[var(--primary-color)] rounded-lg 
                                 flex items-center justify-center glow-effect`}>
                    <div className={`icon-${stat.icon} text-xl text-white`}></div>
                  </div>
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">{stat.number}</div>
                  <div className="text-[var(--text-secondary)] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}