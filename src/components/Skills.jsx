const skills = [
  { category: 'Languages', items: ['Java', 'Python','C++', 'JavaScript', 'SQL','HTML5','CSS3']},
  { category: 'Backend', items: ['Spring Boot', 'Django', 'REST APIs'] },
  { category: 'Database', items: ['MongoDB', 'MySQL'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman',' IntelliJ IDEA '] },
]

function Skills() {
  return (
    <section id="skills">
      <p className="fade-up" style={{
        fontSize: 11, fontWeight: 500,
        textTransform: 'uppercase', letterSpacing: 4,
        color: '#c0392b', marginBottom: 12,
      }}>
        What I Work With
      </p>
      <h2 className="fade-up" style={{
        fontFamily: 'Fraunces, serif',
        fontSize: 'clamp(40px, 5vw, 64px)',
        fontWeight: 700, letterSpacing: -2,
        color: '#1a1814', marginBottom: 64,
        transitionDelay: '0.1s',
      }}>
        Skills
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}>
        {skills.map((group, i) => (
          <div key={group.category} className="fade-up" style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
            <p style={{
              fontSize: 10, fontWeight: 500,
              textTransform: 'uppercase', letterSpacing: 3,
              color: '#c0392b', marginBottom: 20,
              borderBottom: '2px solid #1a1814',
              paddingBottom: 10,
            }}>
              {group.category}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {group.items.map((skill) => (
                <div key={skill} style={{
                  fontSize: 15, fontWeight: 400,
                  color: '#3d3a34',
                  padding: '10px 0',
                  borderBottom: '1px solid #e8e4dc',
                  display: 'flex', alignItems: 'center', gap: 10,
                  cursor: 'default',
                  transition: 'padding-left 0.2s, color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.paddingLeft = '8px'; e.currentTarget.style.color = '#1a1814' }}
                  onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.color = '#3d3a34' }}
                >
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c0392b', flexShrink: 0 }} />
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