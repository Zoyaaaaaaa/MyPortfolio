export default function Hero() {
  return (
    <section className="section-container">
      <div className="flex flex-col gap-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-light text-zinc-900 leading-tight mb-6">
            AI Systems Architect
          </h1>
          <p className="text-xl text-zinc-600 font-light leading-relaxed">
            I design production-ready AI systems that optimize latency, retrieval accuracy, and enterprise workflow automation. Specializing in hybrid retrieval architectures, multi-agent orchestration, and knowledge systems at scale.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="metric-badge">Hybrid RAG</span>
          <span className="metric-badge">Multi-Agent Systems</span>
          <span className="metric-badge">Retrieval Optimization</span>
          <span className="metric-badge">Enterprise Scale</span>
        </div>
      </div>
    </section>
  )
}
