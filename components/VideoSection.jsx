export default function VideoSection() {
  return (
    <section className="py-20 h-[60vh]  md:h-screen  bg-blue-950 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Watch Our Flight in Action
      </h2>

      <div className="mx-auto max-w-5xl px-4">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/jRzpagPx6uY?autoplay=0&rel=0"
            title="Team Vyomaxl Demo Flight"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
          {/* <video autoPlay muted loop controls>
            <source src="/someThing.mp4" />
            Your Browser does not support the video tag
          </video> */}
        </div>
      </div>
    </section>
  );
}
