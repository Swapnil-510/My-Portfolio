const skills = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    category: 'AI / ML',
    items: [
      'LLM Concepts',
      'Prompt Engineering',
      'AI Agents',
      'Semantic Retrieval',
    ],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'FastAPI', 'Django', 'REST APIs'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Maven',
      'IntelliJ IDEA',
    ],
  },
]

function Skills() {
  return (
    <section id="skills">
      <p className="fade-up section-label">
        What I Work With
      </p>

      <h2
        className="fade-up section-title"
        style={{ transitionDelay: '0.1s' }}
      >
        Skills
      </h2>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <div
            key={group.category}
            className="fade-up"
            style={{
              transitionDelay: `${0.1 + i * 0.08}s`,
            }}
          >
            <p className="skill-category">
              {group.category}
            </p>

            <div className="skill-list">
              {group.items.map((skill) => (
                <div
                  key={skill}
                  className="skill-item"
                >
                  <span className="skill-dot" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills