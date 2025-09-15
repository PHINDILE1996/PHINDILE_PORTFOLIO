function Skills() {
  try {
    const skillCategories = [
      {
        title: 'Technical Skills',
        icon: 'code',
        skills: [
          { name: 'Artificial Intelligence', level: 90 },
          { name: 'Machine Learning', level: 85 },
          { name: 'Python', level: 80 },
          { name: 'Data Science', level: 85 },
          { name: 'Chatbot Development', level: 90 },
          { name: 'Generative AI', level: 85 }
        ],
        color: 'from-blue-500 to-blue-600'
      },
      {
        title: 'Business Skills',
        icon: 'briefcase',
        skills: [
          { name: 'Customer Service', level: 95 },
          { name: 'Sales', level: 88 },
          { name: 'Project Management', level: 82 },
          { name: 'Telemarketing', level: 85 },
          { name: 'Lead Generation', level: 80 }
        ],
        color: 'from-green-500 to-green-600'
      },
      {
        title: 'Soft Skills',
        icon: 'users',
        skills: [
          { name: 'Problem-Solving', level: 92 },
          { name: 'Communication', level: 95 },
          { name: 'Teamwork', level: 90 },
          { name: 'Adaptability', level: 88 },
          { name: 'Decision-Making', level: 85 }
        ],
        color: 'from-purple-500 to-purple-600'
      }
    ];
    
    const tools = [
      { name: 'Voiceflow', icon: 'mic' },
      { name: 'Framer', icon: 'layout' },
      { name: 'Cohere', icon: 'brain' },
      { name: 'Python', icon: 'code' },
      { name: 'ChatGPT', icon: 'message-square' },
      { name: 'Azure AI', icon: 'cloud' }
    ];
    
    return (
      <section id="skills" className="section-padding relative overflow-hidden" 
               data-name="skills" data-file="components/Skills.js">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100"></div>
        <div className="absolute inset-0 tech-bg-pattern"></div>
        <div className="absolute inset-0 particles-bg opacity-40"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Skills & Expertise</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Technical expertise and professional competencies I've developed
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} 
                   className="card-glow p-6 fade-in"
                   style={{ animationDelay: `${catIndex * 0.2}s` }}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} 
                                 flex items-center justify-center mr-4 glow-effect`}>
                    <div className={`icon-${category.icon} text-xl text-white`}></div>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-primary)] font-medium">{skill.name}</span>
                        <span className="text-[var(--text-secondary)]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                             style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 fade-in">Tools & Technologies</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} 
                   className="text-center p-4 card-glow fade-in hover:scale-105 transition-transform"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 mx-auto mb-3 bg-[var(--bg-secondary)] rounded-lg 
                              flex items-center justify-center">
                  <div className={`icon-${tool.icon} text-xl text-[var(--primary-color)]`}></div>
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}
