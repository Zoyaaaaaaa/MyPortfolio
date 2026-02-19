export default function Contact() {
  return (
    <section className="section-container border-t border-zinc-200">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-light text-zinc-900 mb-6">Get In Touch</h2>
        <p className="text-lg text-zinc-600 font-light mb-8 leading-relaxed">
          Interested in discussing AI systems architecture, enterprise scaling challenges, or partnership opportunities? I&apos;m available for consulting, technical discussions, and collaborative projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href="mailto:contact@example.com"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 border border-zinc-300 rounded hover:bg-zinc-200 transition-colors"
          >
            Email
          </a>
          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 border border-zinc-300 rounded hover:bg-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 border border-zinc-300 rounded hover:bg-zinc-200 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-16 pt-16 border-t border-zinc-200 text-center text-sm text-zinc-500 font-light">
        <p>Designing production AI systems | Retrieval • Orchestration • Scale</p>
      </div>
    </section>
  )
}
