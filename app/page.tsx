export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[80vh] flex items-center justify-center"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to First Commit
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8">
              Real Software Engineering Experience for Students
            </p>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Bridge the gap between tutorials and real software development.
              Learn industry skills, join simulated internships, and build a
              portfolio that proves your abilities.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              About Us
            </h2>
            <div className="space-y-6 text-lg text-foreground/70">
              <p>
                First Commit is dedicated to providing students with real-world
                software engineering experience.
              </p>
              <p>
                We believe in learning by doing, and our platform offers
                simulated internships, real project contributions, and the
                opportunity to build a professional portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section
          id="events"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Events
            </h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border border-foreground/10 bg-foreground/5">
                <h3 className="text-2xl font-semibold mb-3">
                  Upcoming Workshops
                </h3>
                <p className="text-foreground/70">
                  Join our hands-on workshops to learn from industry experts and
                  build real projects.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-foreground/10 bg-foreground/5">
                <h3 className="text-2xl font-semibold mb-3">Hackathons</h3>
                <p className="text-foreground/70">
                  Participate in our hackathons and solve real-world problems
                  with your team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section
          id="sponsors"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Sponsors
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Partnering with leading companies to provide the best experience
              for students.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg border border-foreground/10 bg-foreground/5 flex items-center justify-center"
                >
                  <span className="text-foreground/40">Sponsor {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Tier */}
              <div className="p-8 rounded-lg border border-foreground/10 bg-foreground/5">
                <h3 className="text-2xl font-semibold mb-4">Free</h3>
                <p className="text-3xl font-bold mb-6">
                  $0
                  <span className="text-lg font-normal text-foreground/60">
                    /month
                  </span>
                </p>
                <ul className="space-y-3 mb-8 text-foreground/70">
                  <li>✓ Basic workshops</li>
                  <li>✓ Community access</li>
                  <li>✓ Limited projects</li>
                </ul>
                <button className="w-full py-3 rounded-lg border border-foreground/20 hover:bg-foreground/10 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Pro Tier */}
              <div className="p-8 rounded-lg border-2 border-foreground bg-foreground/5 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background rounded-full text-sm font-medium">
                  Popular
                </div>
                <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                <p className="text-3xl font-bold mb-6">
                  $29
                  <span className="text-lg font-normal text-foreground/60">
                    /month
                  </span>
                </p>
                <ul className="space-y-3 mb-8 text-foreground/70">
                  <li>✓ All Free features</li>
                  <li>✓ Unlimited projects</li>
                  <li>✓ 1-on-1 mentorship</li>
                  <li>✓ Certificate programs</li>
                </ul>
                <button className="w-full py-3 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity">
                  Upgrade Now
                </button>
              </div>

              {/* Enterprise Tier */}
              <div className="p-8 rounded-lg border border-foreground/10 bg-foreground/5">
                <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                <p className="text-3xl font-bold mb-6">Custom</p>
                <ul className="space-y-3 mb-8 text-foreground/70">
                  <li>✓ All Pro features</li>
                  <li>✓ Custom workshops</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Team management</li>
                </ul>
                <button className="w-full py-3 rounded-lg border border-foreground/20 hover:bg-foreground/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
