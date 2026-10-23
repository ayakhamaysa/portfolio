export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
      <p className="text-gray-600 mb-6">Have a project in mind? Reach out.</p>

      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:ayakhamaysa123@gmail.com"
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
        >
          Email me
        </a>
        <a
          href="https://github.com/ayakhamaysa"
          target="_blank"
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}