
const Home = () => {
  return (
    <div className="page">
      <section className="section-hero pt-40-pb-40">
        <span className="badge">Welcome to the Future</span>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
          Smart <span className="color-brand-primary">Academic Tracking</span> <br />
          Under the Stars
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Calculate your GPA with precision. Track your progress, simulate your future grades, 
          and keep your academic records safe in one beautiful place.
        </p>
        <div className="flex-center gap-16">
          <a href="/signup">
            <button className="lg-button">Get Started for Free</button>
          </a>
          <a href="/services">
            <button className="button-small-border" style={{ padding: '12px 24px' }}>Explore Tools</button>
          </a>
        </div>
      </section>

      {/* Feature Preview */}
      <div className="card-container mt-40" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <div className="card card-centered" style={{ flex: '1', maxWidth: '300px' }}>
          <h3>Fast</h3>
          <p>Instant calculations for your semester and cumulative GPA.</p>
        </div>
        <div className="card card-centered" style={{ flex: '1', maxWidth: '300px' }}>
          <h3>Secure</h3>
          <p>Your data is stored locally in your browser for total privacy.</p>
        </div>
        <div className="card card-centered" style={{ flex: '1', maxWidth: '300px' }}>
          <h3>Smart</h3>
          <p>Use our What-If simulator to plan your academic goals.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;