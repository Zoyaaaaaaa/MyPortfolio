export default function SystemDesign() {
  const principles = [
    {
      title: 'Hybrid Retrieval',
      description: 'Combine symbolic and semantic search for superior relevance and recall across diverse data types.'
    },
    {
      title: 'Latency Obsession',
      description: 'Optimize for sub-100ms inference with intelligent caching, vectorization, and architectural decisions.'
    },
    {
      title: 'Memory Architecture',
      description: 'Build contextual memory systems enabling multi-turn, context-aware AI interactions at enterprise scale.'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Design systems that grow horizontally—multi-tenancy, distributed retrieval, and elastic compute patterns.'
    },
    {
      title: 'Intelligent Orchestration',
      description: 'Use agentic frameworks for complex workflows with persistent state and reliable decision-making.'
    },
    {
      title: 'Data Intelligence',
      description: 'Transform unstructured enterprise data into actionable, searchable knowledge assets.'
    }
  ]

  return (
    <section className="section-container bg-white border-t border-zinc-200">
      <div className="mb-16">
        <h2 className="text-4xl font-light text-zinc-900 mb-2">Design Philosophy</h2>
        <p className="text-lg text-zinc-600 font-light">
          Core principles that guide every system I architect
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {principles.map((principle) => (
          <div key={principle.title} className="border border-zinc-200 p-6 rounded-lg hover:border-zinc-400 transition-colors">
            <h3 className="text-lg font-medium text-zinc-900 mb-3">{principle.title}</h3>
            <p className="text-zinc-600 font-light leading-relaxed">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
