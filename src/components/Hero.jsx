function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-label fade-up">
          Computer Science Engineer
        </p>

        <h1 className="hero-title fade-up">
          Swapnil
        </h1>

        <p className="hero-subtitle fade-up">
          AI/ML · Backend Development · Software Engineering
        </p>

        <p className="hero-education fade-up">
          B.Tech CSE — Uttaranchal University, Dehradun
        </p>

        <p className="hero-description fade-up">
          Building practical applications with Java, Spring Boot,
          Python, React and modern AI technologies. Focused on strong
          fundamentals, backend engineering and intelligent systems.
        </p>

        <div className="hero-actions fade-up">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a
            href="https://github.com/Swapnil-510"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>

          <a
            href="/Swapnil_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="hero-bottom fade-up">
        <span>Scroll to explore</span>
        <span>↓</span>
      </div>
    </section>
  )
}

export default Hero