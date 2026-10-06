
function Contact() {
  const links = [
    {
      icon: '@',
      label: 'swapnildombe777@gmail.com',
      href: 'mailto:swapnildombe777@gmail.com',
    },
    {
      icon: 'GH',
      label: 'github.com/Swapnil-510',
      href: 'https://github.com/Swapnil-510',
    },
    {
      icon: 'LI',
      label: 'linkedin.com/in/swapnil-d-030650380',
      href: 'https://linkedin.com/in/swapnil-d-030650380',
    },
  ]

  return (
    <section id="contact">
      <p className="fade-up section-label">
        Get In Touch
      </p>

      <h2
        className="fade-up section-title"
        style={{ transitionDelay: '0.1s' }}
      >
        Let's Connect.
      </h2>

      <p
        className="fade-up contact-intro"
        style={{ transitionDelay: '0.15s' }}
      >
        Open for internships, software development opportunities,
        and interesting projects. Feel free to reach out.
      </p>

      <div
        className="contact-links fade-up"
        style={{ transitionDelay: '0.2s' }}
      >
        {links.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
          >
            <span className="contact-icon">{icon}</span>

            <span className="contact-label">{label}</span>

            <span className="contact-arrow">↗</span>
          </a>
        ))}
      </div>

      <div className="contact-footer">
        <span>Swapnil 2026</span>
        <span>Built with React</span>
      </div>
    </section>
  )
}

export default Contact

