"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-28 bg-blue-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Get in Touch
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          Reach us on WhatsApp, email, or social media.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="glass rounded-xl p-6 shadow-lg backdrop-blur-md hover:shadow-2xl transition-all duration-300 flex flex-col gap-4">
            <a
              href="https://wa.me/7892433465"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-medium hover:scale-105 transition-transform glow"
              style={{ backgroundColor: "#25D366" }}
            >
              WhatsApp
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=teamvyomax@gmail.com&su=VyomaX%20Inquiry&body=Hi%2C%0A%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-medium hover:scale-105 transition-transform"
              style={{ backgroundColor: "#EA4335" }}
            >
              Email
            </a>

            <a
              href="https://www.instagram.com/team_vyomax?igsh=cXh3M2U4N3YzOHF2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-medium hover:scale-105 transition-transform"
              style={{
                background:
                  "linear-gradient(45deg,#feda75,#d62976,#962fbf,#4f5bd5)",
              }}
            >
              Instagram
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSecRHqCqZOhifKI100pF45jEjhq3eNfUMU1TfqFvk7_Ir-NGg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-medium hover:scale-105 transition-transform"
              style={{ backgroundColor: "#0A66C2" }}
            >
              Join the Club
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent("Inquiry from VyomaX website");
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get(
                  "email"
                )}\nMessage:\n${data.get("message")}`
              );
              window.location.href = `mailto:contact@VyomaX.example.com?subject=${subject}&body=${body}`;
            }}
            className="glass rounded-xl p-6 grid grid-cols-1 gap-4 shadow-lg backdrop-blur-md hover:shadow-2xl transition-all duration-300"
          >
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary focus:scale-105 transition-transform"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary focus:scale-105 transition-transform"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary focus:scale-105 transition-transform"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-lg px-5 py-3 bg-primary text-primary-foreground font-medium glow hover:scale-105 transition-transform"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
