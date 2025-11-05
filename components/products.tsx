const products = [
  {
    id: "kit1",
    name: "VyomaX Drone Kit",
    info: "Complete quadcopter kit with frame, motors, and ESCs.",
    price: "₹7,999",
    image: "/drone-kit-on-table.jpg",
  },
  {
    id: "prop1",
    name: "Carbon Props (4x)",
    info: "Balanced, high-efficiency carbon fiber propellers.",
    price: "₹1,299",
    image: "/carbon-fiber-propellers.jpg",
  },
  {
    id: "fc1",
    name: "Flight Controller",
    info: "STM-based controller with built-in gyro and OSD.",
    price: "₹4,499",
    image: "/flight-controller-board.jpg",
  },
];

export default function Products() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold">Products</h2>
      <p className="mt-2 text-muted-foreground">
        Kits, parts, and accessories.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article key={p.id} className="glass rounded-xl overflow-hidden">
            <img
              src={p.image || "/placeholder.svg"}
              alt={p.name}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium">{p.name}</h3>
                <span className="text-primary font-semibold">{p.price}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.info}</p>
              <a
                href="https://wa.me/your_number"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-lg px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 transition glow"
              >
                Buy via WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
