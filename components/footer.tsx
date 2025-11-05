export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex items-center justify-between flex-wrap gap-3">
        <p>© 2025 Team VyomaX | Designed with passion for flight.</p>
        <div className="flex items-center gap-4">
          <a
            className="hover:text-primary"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="hover:text-primary"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            className="hover:text-primary"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Optional floating WhatsApp */}
      <a
        href="https://wa.me/7892433465"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-primary text-primary-foreground px-4 py-3 glow"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        WhatsApp
      </a>
    </footer>
  );
}
