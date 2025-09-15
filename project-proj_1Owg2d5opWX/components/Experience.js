function Experience() {
  try {
    const experiences = [
      {
        title: 'ADS Intern',
        company: 'CAPACITI – Tech Career Accelerator',
        period: '2025',
        description: [
          'Completed intensive training in Data Science, AI, and related technologies',
          'Developed projects applying machine learning, chatbot development, and data analytics',
          'Collaborated with peers on portfolio-building and career development projects',
          'Enhanced problem-solving and technical skills through capstone projects'
        ],
        icon: 'brain',
        color: 'bg-gradient-to-r from-blue-500 to-purple-600'
      },
      {
        title: 'Marketing Assistant',
        company: 'AGM Marketing',
        period: 'Jan 2021 – Jul 2022',
        description: [
          'Conducted telemarketing and direct marketing campaigns',
          'Handled outbound sales calls, lead generation, and customer satisfaction surveys',
          'Explained products, prices, and secured customer information',
          'Maintained accurate customer contact records'
        ],
        icon: 'megaphone',
        color: 'bg-gradient-to-r from-green-500 to-teal-600'
      },
      {
        title: 'Floor Assistant',
        company: 'Checkers Hyper',
        period: 'Jan 2019 – Jul 2019',
        description: [
          'Assisted customers with directions, product locations, and promotions',
          'Supported sales through upselling and cross-selling techniques',
          'Replenished inventory and maintained store presentation',
          'Multi-tasked effectively, balancing responsibilities with customer satisfaction'
        ],
        icon: 'shopping-cart',
        color: 'bg-gradient-to-r from-purple-500 to-pink-600'
      },
      {
        title: 'Till Operator',
        company: 'Woolworths',
        period: 'Nov 2015 – Apr 2018',
        description: [
          'Delivered exceptional customer service ensuring positive shopping experiences',
          'Maintained strong product knowledge to assist and recommend to customers',
          'Processed transactions accurately and efficiently',
          'Supported sales growth by meeting and exceeding targets'
        ],
        icon: 'credit-card',
        color: 'bg-gradient-to-r from-orange-500 to-red-600'
      }
    ];
    
    return (
      <section id="experience" className="section-padding relative overflow-hidden" 
               data-name="experience" data-file="components/Experience.js">
        <div className="absolute inset-0 aurora-bg"></div>
        <div className="absolute inset-0 floating-orbs opacity-50"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Professional Experience</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                My career journey from customer service to AI and data science
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[var(--primary-color)] opacity-30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} 
                   className={`relative mb-16 ${index % 2 === 0 ? 'fade-in' : 'fade-in'}`}
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="card-glow p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-lg ${exp.color} flex items-center justify-center mr-4 glow-effect`}>
                          <div className={`icon-${exp.icon} text-xl text-white`}></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[var(--text-primary)]">{exp.title}</h3>
                          <p className="text-[var(--primary-color)] font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 font-medium">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-[var(--text-secondary)] flex items-start">
                            <div className="icon-check text-green-500 text-sm mr-2 mt-1 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 
                                bg-[var(--primary-color)] rounded-full border-4 border-white glow-effect"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}