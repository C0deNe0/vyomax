import Image from "next/image";
import cloud1 from "../public/images/cloud02.png";
import cloud2 from "../public/images/cloud01.png";
import cloud3 from "../public/images/cloud03.png";
import FloatingComponent from "./floatingCompo";

export default function Hero() {
  return (
    <div className="relative min-h-[100svh] flex items-center justify-center cursor-none overflow-hidden">
      {/* Background visual */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        {/* Subtle vignette + grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(800px 400px at 50% -10%, rgba(0,229,255,15), transparent 60%), radial-gradient(800px 400px at 80% 110%, rgba(0,229,255,12), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-60 bg-no-repeat bg-top bg-cover"
          style={{
            backgroundImage:
              " radial-gradient(800px 400px at 50% -10%, rgba(255,255,255,0.15), transparent 50%),radial-gradient(800px 400px at 80% 110%, rgba(0,229,255,0.35), transparent 10%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(230,241,255,0.75) 1.5px, transparent 1px), linear-gradient(to bottom, rgba(230,241,255,0.75) 1.5px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="overflow-x-hidden">
        <Image
          src="/images/paper-plane1.svg"
          width={30}
          height={30}
          alt="plane"
          className="hero-plane text-white absolute right-[31px] top-0 opacity-80"
        />

        <Image
          src="/images/paper-plane1.svg"
          width={30}
          height={30}
          alt="plane"
          className="hero-plane absolute right-[331px] top-3 opacity-100"
        />

        <Image
          src="/images/paper-plane1.svg"
          width={30}
          height={30}
          alt="plane"
          className="hero-plane absolute right-[232px]  bottom-[320px] opacity-100"
        />

        <FloatingComponent
          src={cloud2}
          x="19%"
          y="11%"
          height={390}
          width={390}
          range={25}
          speed={3}
          className="z-[-10] opacity-60"
        />
        <FloatingComponent
          src={cloud1}
          height={380}
          width={380}
          alt="plane"
          x="60%"
          y="67%"
          speed={4}
          range={25}
          className=" opacity-50"
        />
        <FloatingComponent
          src={cloud1}
          height={380}
          width={380}
          alt="plane"
          x="17%"
          y="69%"
          speed={4}
          range={25}
          className=" opacity-45"
        />
        <FloatingComponent
          src={cloud3}
          height={580}
          width={580}
          alt="plane"
          x="2%"
          y="15%"
          speed={4}
          range={25}
          className="bg-transparent opacity-56"
        />
        <FloatingComponent
          src={cloud3}
          height={580}
          width={580}
          alt="plane"
          x="66%"
          y="17%"
          speed={4}
          range={25}
          className="bg-transparent opacity-45 z-[-128]"
        />
      </div>
      <div className="mx-auto  max-w-5xl px-4 text-center">
        <h1 className="text-balance flex flex-col text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          <span>TΞAM VYØMΔX</span>
          <span className="h-2"></span>
          <span className="text-primary text-3xl  "> build.fly.repeat✈️</span>
        </h1>
        <p className="mt-5 text-pretty text-base md:text-lg text-muted-foreground font-mono">
          We don't just build planes, we make them fly better.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg px-5 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow"
          >
            Explore Our Work
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-lg px-5 py-3 border border-border hover:bg-secondary/60 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
