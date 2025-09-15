function Repositories() {
  try {
    const repositories = [
      {
        name: 'AI-Learning-Projects',
        description: 'Collection of AI and machine learning projects demonstrating various algorithms and techniques.',
        language: 'Python',
        stars: 12,
        forks: 3,
        topics: ['ai', 'machine-learning', 'python', 'data-science'],
        url: 'https://github.com/PHINDILE1996/AI-Learning-Projects',
        icon: 'brain',
        color: 'bg-purple-500'
      },
      {
        name: 'Chatbot-Development',
        description: 'Educational chatbot implementations using various frameworks and NLP techniques.',
        language: 'JavaScript',
        stars: 8,
        forks: 2,
        topics: ['chatbot', 'nlp', 'javascript', 'ai'],
        url: 'https://github.com/PHINDILE1996/Chatbot-Development',
        icon: 'bot',
        color: 'bg-blue-500'
      },
      {
        name: 'Data-Science-Portfolio',
        description: 'Comprehensive data analysis projects showcasing visualization and statistical techniques.',
        language: 'Python',
        stars: 15,
        forks: 5,
        topics: ['data-science', 'visualization', 'pandas', 'matplotlib'],
        url: 'https://github.com/PHINDILE1996/Data-Science-Portfolio',
        icon: 'chart-bar',
        color: 'bg-green-500'
      },
      {
        name: 'Accessible-Web-Components',
        description: 'Reusable web components designed with accessibility-first principles and WCAG compliance.',
        language: 'HTML/CSS/JS',
        stars: 6,
        forks: 1,
        topics: ['accessibility', 'wcag', 'web-components', 'inclusive-design'],
        url: 'https://github.com/PHINDILE1996/Accessible-Web-Components',
        icon: 'heart',
        color: 'bg-pink-500'
      },
      {
        name: 'Python-Learning-Path',
        description: 'Structured learning materials and exercises for Python programming from basics to advanced.',
        language: 'Python',
        stars: 20,
        forks: 8,
        topics: ['python', 'learning', 'tutorials', 'exercises'],
        url: 'https://github.com/PHINDILE1996/Python-Learning-Path',
        icon: 'code',
        color: 'bg-yellow-500'
      },
      {
        name: 'AI-Ethics-Research',
        description: 'Research papers and case studies on ethical AI implementation and responsible development.',
        language: 'Markdown',
        stars: 4,
        forks: 2,
        topics: ['ai-ethics', 'research', 'responsible-ai', 'documentation'],
        url: 'https://github.com/PHINDILE1996/AI-Ethics-Research',
        icon: 'shield',
        color: 'bg-indigo-500'
      }
    ];

    return (
      <section id="repositories" className="section-padding relative overflow-hidden"
               data-name="repositories" data-file="components/Repositories.js">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
        <div className="absolute inset-0 diamond-pattern opacity-20"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">GitHub Repositories</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Open source projects and code samples showcasing my development journey
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo, index) => (
              <div key={index}
                   className="card-glow p-6 fade-in hover:scale-105 transition-transform"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg ${repo.color} flex items-center justify-center mr-3 glow-effect`}>
                      <div className={`icon-${repo.icon} text-lg text-white`}></div>
                    </div>
                    <h3 className="font-semibold text-[var(--text-primary)]">{repo.name}</h3>
                  </div>
                  <a href={repo.url}
                     target="_blank" rel="noopener noreferrer"
                     className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                    <div className="icon-external-link text-sm"></div>
                  </a>
                </div>

                <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <div className="w-3 h-3 bg-[var(--primary-color)] rounded-full mr-1"></div>
                      {repo.language}
                    </span>
                    <span className="flex items-center">
                      <div className="icon-star text-yellow-500 text-xs mr-1"></div>
                      {repo.stars}
                    </span>
                    <span className="flex items-center">
                      <div className="icon-git-branch text-[var(--text-secondary)] text-xs mr-1"></div>
                      {repo.forks}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {repo.topics.slice(0, 3).map((topic, i) => (
                    <span key={i}
                          className="px-2 py-1 bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] 
                                   text-xs rounded-full font-medium">
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-[var(--text-secondary)] mb-4">
                Explore more projects and contributions on my GitHub profile
              </p>
              <a href="https://github.com/PHINDILE1996"
                 target="_blank" rel="noopener noreferrer"
                 className="btn-primary">
                <div className="icon-github text-lg mr-2 inline-block"></div>
                View All Repositories
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Repositories component error:', error);
    return null;
  }
}