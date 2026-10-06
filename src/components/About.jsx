function About() {
  return (
    <section id="about">
      <p className="fade-up section-label">About Me</p>

      <h2 className="fade-up section-title">
        Building with purpose.
      </h2>

      <div className="about-grid">
        <p className="fade-up about-text">
          I'm a Computer Science Engineering student at Uttaranchal
          University focused on AI/ML, backend development and strong
          software engineering fundamentals.
        </p>

        <div className="fade-up about-details">
          <div>
            <span>Education</span>
            <strong>B.Tech CSE</strong>
            <small>Uttaranchal University</small>
          </div>

          <div>
            <span>Focus</span>
            <strong>AI/ML & Backend</strong>
            <small>Java · Python · Spring Boot</small>
          </div>

          <div>
            <span>Problem Solving</span>
            <strong>220+ LeetCode</strong>
            <small>DSA & Competitive Programming</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About