export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: 'Enterprise Project Intelligence Engine',
      subtitle: 'TF-IDF Recommendation System',
      problem: 'Organizations with 500+ projects faced discovery challenges, duplicate solution building, and siloed knowledge across teams.',
      solution: 'Built optimized TF-IDF recommendation engine with intelligent caching and multi-tag filtering.',
      impact: [
        '70% faster project discovery',
        'Sub-50ms inference latency',
        '90% reduction in duplicate efforts'
      ],
      metrics: [
        { label: 'Projects Indexed', value: '2,000+' },
        { label: 'Query Latency', value: '<50ms' },
        { label: 'Discovery Improvement', value: '70%' }
      ]
    },
    {
      id: 2,
      title: 'Multi-Tenant Knowledge Assistant Platform',
      subtitle: 'Hybrid RAG + Video Intelligence',
      problem: 'Companies struggled to leverage unstructured documentation and video training materials, leading to repetitive support queries and knowledge silos.',
      solution: 'Designed multi-tenant hybrid RAG system converting videos and manuals into searchable, conversational knowledge layer.',
      impact: [
        '60% reduction in support query time',
        '40% improvement in retrieval precision',
        '30+ minutes of persistent memory'
      ],
      metrics: [
        { label: 'Query Response', value: '<2s' },
        { label: 'Retrieval Accuracy', value: '+40%' },
        { label: 'Support Reduction', value: '60%' }
      ]
    },
    {
      id: 3,
      title: 'Autonomous Multi-Agent Document System',
      subtitle: 'LangGraph Orchestration',
      problem: 'Complex document workflows required manual drafting, multiple review cycles, and heavy expert dependency—creating bottlenecks and inconsistency.',
      solution: 'Architected memory-enabled multi-agent system with specialized agents for generation, validation, reasoning, and memory recall.',
      impact: [
        '50% faster document drafting',
        '30% reduction in review cycles',
        'Consistent output quality'
      ],
      metrics: [
        { label: 'Drafting Time', value: '-50%' },
        { label: 'Review Cycles', value: '-30%' },
        { label: 'Memory Persistence', value: 'Stateful' }
      ]
    },
    {
      id: 4,
      title: 'Multimodal AI Interview Engine',
      subtitle: 'Real-time Speech & Vision Integration',
      problem: 'Interview processes lacked real-time intelligence, behavioral analysis, and objective scoring mechanisms.',
      solution: 'Built real-time multimodal system integrating speech-to-text, gaze tracking, and behavioral analysis using LiveKit and computer vision.',
      impact: [
        'Real-time behavioral insights',
        'Objective candidate assessment',
        'Reduced interviewer bias'
      ],
      metrics: [
        { label: 'Real-time Metrics', value: '15+' },
        { label: 'Processing Latency', value: '<500ms' },
        { label: 'Assessment Coverage', value: 'Behavioral' }
      ]
    }
  ]

  return (
    <section className="section-container">
      <div className="mb-16">
        <h2 className="text-4xl font-light text-zinc-900 mb-2">AI Systems I&apos;ve Designed</h2>
        <p className="text-lg text-zinc-600 font-light">
          Case studies demonstrating business impact and technical depth
        </p>
      </div>

      <div className="space-y-16">
        {cases.map((study) => (
          <div key={study.id} className="border-b border-zinc-200 pb-16 last:border-b-0 last:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-light text-zinc-900 mb-2">{study.title}</h3>
                <p className="text-sm text-zinc-500 font-light uppercase tracking-wide mb-6">{study.subtitle}</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-2">Business Problem</p>
                    <p className="text-sm text-zinc-600 font-light leading-relaxed">{study.problem}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-2">Strategic Solution</p>
                    <p className="text-sm text-zinc-600 font-light leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="mb-8">
                  <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-4">Impact Metrics</p>
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
                        <p className="text-2xl font-light text-zinc-900 mb-1">{metric.value}</p>
                        <p className="text-xs text-zinc-600 font-light">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-3">Business Outcomes</p>
                  <ul className="space-y-2">
                    {study.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-zinc-400 mt-1">→</span>
                        <span className="text-sm text-zinc-600 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
