export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-emerald-600 font-medium">Hi, I'm</p>
      <h1 className="text-5xl font-bold mt-2">Aya</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-xl">
        Frontend developer building fast, modern websites
        for restaurants, clinics and online stores.
      </p>
      <a
        href="#projects"
        className="inline-block mt-8 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
      >
        See my work
      </a>
    </section>
  );
}
