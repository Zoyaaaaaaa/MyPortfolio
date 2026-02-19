export default function Architecture() {
  const architectures = [
    {
      name: 'Hybrid RAG Pipeline',
      layers: [
        'User Query',
        'Semantic Embedding',
        'Keyword Search (TF-IDF)',
        'Hybrid Ranking',
        'LLM Context Assembly',
        'Response Generation'
      ]
    },
    {
      name: 'Multi-Agent Orchestration',
      layers: [
        'User Input',
        'Planner Agent',
        'Generator Agent',
        'Validator Agent',
        'Memory Persistence',
        'Final Output'
      ]
    },
    {
      name: 'Knowledge System Architecture',
      layers: [
        'Raw Data Ingestion',
        'Document Cleaning',
        'Chunking Strategy',
        'Vector Embeddings',
        'Index Storage',
        'Retrieval & Ranking'
      ]
    }
  ]

  return (
    <section className="section-container bg-white border-t border-zinc-200">
      <div className="mb-16">
        <h2 className="text-4xl font-light text-zinc-900 mb-2">System Architecture Patterns</h2>
        <p className="text-lg text-zinc-600 font-light">
          Production-grade architectural approaches for complex AI systems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {architectures.map((arch) => (
          <div key={arch.name} className="border border-zinc-200 rounded-lg p-8 bg-zinc-50">
            <h3 className="text-lg font-medium text-zinc-900 mb-6">{arch.name}</h3>
            <div className="space-y-4">
              {arch.layers.map((layer, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-zinc-500 uppercase">Step {idx + 1}</span>
                    <div className="flex-1 h-px bg-zinc-200"></div>
                  </div>
                  <p className="text-sm text-zinc-700 font-light">{layer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-zinc-200 pt-16">
        <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-8">
          <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-4">Core Optimization Strategies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-medium text-zinc-900 mb-3">Performance</p>
              <ul className="space-y-2">
                <li className="text-sm text-zinc-600 font-light">Sub-50ms query latency through intelligent caching</li>
                <li className="text-sm text-zinc-600 font-light">Vectorization of precomputed similarity matrices</li>
                <li className="text-sm text-zinc-600 font-light">Async batch processing for non-critical paths</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-900 mb-3">Reliability</p>
              <ul className="space-y-2">
                <li className="text-sm text-zinc-600 font-light">Stateful agent memory with persistence</li>
                <li className="text-sm text-zinc-600 font-light">Fallback ranking strategies for degraded retrieval</li>
                <li className="text-sm text-zinc-600 font-light">Multi-tenant data isolation and security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
