"use client"

import { useEffect, useMemo, useState } from "react"

const chapters = [
  ["ORIGIN", "origin"],
  ["SYSTEMS", "systems"],
  ["PROOF", "proof"],
  ["BATTLES", "battles"],
  ["SIGNAL", "signal"],
  ["FIELD", "field"],
  ["GRAPH", "graph"],
  ["UNSHIPPED", "unshipped"],
  ["NOW", "now"],
  ["CHANNEL", "channel"],
] as const

const projects = [
  ["DEAL DETECTIVE", "shopping intelligence agent", "INPUT → MODEL → MEMORY → OUTPUT", "E-commerce", "https://deal-detective-tan.vercel.app/"],
  ["INTERVIEWMATE", "adaptive interview preparation", "PROMPT → COACH → FEEDBACK → REPETITION", "AI / ML", "https://interview-ai-umber-alpha.vercel.app/"],
  ["VIDVOYAGER", "video insights engine", "TRANSCRIBE → RETRIEVE → SUMMARIZE → ASK", "AI / ML", "https://github.com/Zoyaaaaaaa/VidVoyager"],
  ["PNEUMOEASE", "computer vision for pneumonia detection", "IMAGE → INFERENCE → CONFIDENCE → DECISION", "Healthcare", "https://github.com/Zoyaaaaaaa/PneumoniaDetection"],
]

const experiences = [
  ["AI SYSTEMS", "Building production-grade retrieval, agent orchestration, and knowledge infrastructure.", "2024—NOW", "latency ↓ 40%", "agents 06"],
  ["FULL-STACK", "Turning ambiguous product problems into durable, measured systems for real people.", "2023—2024", "shipping ↑ 3×", "surfaces 12"],
  ["RESEARCH", "Following the question beneath the question: how should machines remember?", "2022—2023", "papers 18", "models 09"],
]

function ComputationalField() {
  const nodes = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    x: 8 + ((i * 37) % 84), y: 16 + ((i * 53) % 68), r: i % 5 === 0 ? 3.5 : 1.8,
  })), [])
  return (
    <svg viewBox="0 0 760 430" className="field-art" role="img" aria-label="Deterministic system architecture network">
      <g className="field-grid">{Array.from({ length: 9 }, (_, i) => <line key={`h${i}`} x1="0" x2="760" y1={i * 54} y2={i * 54} />)}{Array.from({ length: 16 }, (_, i) => <line key={`v${i}`} y1="0" y2="430" x1={i * 50} x2={i * 50} />)}</g>
      <g className="field-links">{nodes.slice(0, -1).map((n, i) => <line key={i} x1={`${n.x}%`} y1={`${n.y}%`} x2={`${nodes[i + 1].x}%`} y2={`${nodes[i + 1].y}%`} />)}</g>
      <g className="field-nodes">{nodes.map((n, i) => <circle key={i} cx={`${n.x}%`} cy={`${n.y}%`} r={n.r} />)}</g>
      <circle className="field-core" cx="50%" cy="50%" r="6" />
      <text x="50%" y="50%" dx="14" dy="4">Z//CORE</text>
    </svg>
  )
}

export function CognitivePortfolio() {
  const [active, setActive] = useState("origin")
  const [thinkMode, setThinkMode] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: "-20% 0px -60%" })
    chapters.forEach(([, id]) => document.getElementById(id) && observer.observe(document.getElementById(id)!))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setThinkMode(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="system-shell">
      <header className="system-header">
        <a className="brand" href="#origin"><span className="brand-mark">Z/</span><span>ZOYA HASSAN</span></a>
        <span className="header-context">COGNITIVE SYSTEM / V.03</span>
        <button className="think-trigger" onClick={() => setThinkMode(true)}>ENTER THINK MODE <span>↗</span></button>
      </header>

      <aside className="chapter-rail" aria-label="Portfolio chapters">
        {chapters.map(([label, id], index) => <a key={id} className={active === id ? "active" : ""} href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
      </aside>

      <main>
        <section id="origin" className="hero chapter-section">
          <div className="hero-copy"><p className="eyebrow"><i /> SYSTEM ONLINE / Z//CORE</p><h1>Building systems<br /><em>that think</em><br />with intent.</h1><p className="hero-thesis">I design intelligent infrastructure for the space between a question and a useful answer — where retrieval becomes memory, and software becomes a collaborator.</p><div className="hero-actions"><a className="button-primary" href="#systems">TRACE THE SYSTEM <span>↓</span></a><button className="button-quiet" onClick={() => setThinkMode(true)}>HOW I THINK <span>↗</span></button></div></div>
          <div className="field-wrap"><ComputationalField /><div className="field-label field-label-a">ACTIVE / 03</div><div className="field-label field-label-b">MEMORY LAYER<br /><b>STABLE</b></div></div>
          <div className="hero-footer"><span>01 — ORIGIN</span><span>SCROLL TO INSPECT <b>↓</b></span><span>NEW DELHI / 28.61° N</span></div>
        </section>

        <section id="systems" className="chapter-section section-pad"><div className="section-kicker"><span>02</span><span>CAREER / SYSTEM EVOLUTION</span><span>2022—NOW</span></div><div className="section-intro"><h2>Experience is a<br /><em>sequence of decisions.</em></h2><p>Not a list of roles. A map of increasingly complex questions — and the architectures built to hold them.</p></div><div className="experience-layout"><div className="experience-list">{experiences.map(([title, desc, date], i) => <button key={title} className={selectedExperience === i ? "experience-item selected" : "experience-item"} onClick={() => setSelectedExperience(i)}><span>{date}</span><strong>{title}</strong><small>{desc}</small></button>)}</div><div className="architecture-flow"><p className="mini-label">CURRENT SYSTEM / {experiences[selectedExperience][0]}</p><div className="flow-line">{["PROBLEM", "ARCHITECTURE", "AGENT", "MEMORY", "PIPELINE", "IMPACT"].map((item, i) => <div key={item} className="flow-node"><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b>{i < 5 && <i>→</i>}</div>)}</div><div className="impact-readout"><b>{experiences[selectedExperience][3]}</b><span>{experiences[selectedExperience][4]}</span><p>{experiences[selectedExperience][1]}</p></div></div></div></section>

        <section id="proof" className="chapter-section section-pad dark-section"><div className="section-kicker"><span>03</span><span>THE LAB / SELECTED SYSTEMS</span><span>11 BUILDS</span></div><div className="section-intro"><h2>Proof, in<br /><em>working systems.</em></h2><p>Each project is a small argument: intelligence is only useful when it changes what someone can do.</p></div><div className="project-list">{projects.map(([name, desc, flow, category], i) => <a className="project-row" href={projects[i][4]} target="_blank" rel="noreferrer" key={name}><span className="project-index">0{i + 1}</span><div><h3>{name}</h3><p>{desc}</p></div><div className="project-flow">{flow}</div><span className="project-category">{category}</span><span className="project-arrow">↗</span></a>)}</div></section>

        <section id="battles" className="chapter-section section-pad"><div className="section-kicker"><span>04</span><span>BATTLE LOGS</span><span>MISSION RECORDS</span></div><div className="battle-grid">{[["01", "HACKSYNC", "1ST PLACE", "AI / SYSTEMS"], ["02", "SIH 2024", "NATIONAL FINALIST", "PROBLEM SOLVING"], ["03", "CODECELL", "TOP 3", "BUILD / LEAD"], ["04", "RESEARCH", "PUBLISHED", "KNOWLEDGE"], ["05", "OPEN SOURCE", "ACTIVE", "COMMUNITY"]].map(([n, title, result, type]) => <div className="battle-record" key={n}><span>{n}</span><h3>{title}</h3><b>{result}</b><small>{type}</small></div>)}</div></section>

        <section id="signal" className="chapter-section section-pad signal-section"><div className="section-kicker"><span>05</span><span>SIGNAL / WRITING</span><span>IDEAS IN PUBLIC</span></div><div className="signal-grid"><h2>Thinking is<br /><em>an interface.</em></h2><div className="writing-list"><a href="https://medium.com" target="_blank" rel="noreferrer"><span>01 / ESSAY</span><strong>What should an AI system remember?</strong><small>Medium ↗</small></a><a href="https://medium.com" target="_blank" rel="noreferrer"><span>02 / FIELD NOTE</span><strong>From prompt to pipeline: making agents useful.</strong><small>Medium ↗</small></a><a href="https://medium.com" target="_blank" rel="noreferrer"><span>03 / RESEARCH</span><strong>Retrieval is not memory. A distinction.</strong><small>Medium ↗</small></a></div></div></section>

        <section id="field" className="chapter-section section-pad dark-section"><div className="section-kicker"><span>06</span><span>FIELD WORK</span><span>PEOPLE / SYSTEMS</span></div><div className="field-content"><h2>Technology is a<br /><em>collective practice.</em></h2><div className="field-stats"><div><b>04</b><span>WORKSHOPS LED</span></div><div><b>300+</b><span>PEOPLE REACHED</span></div><div><b>02</b><span>COMMUNITIES BUILT</span></div></div><p>Leading TSEC CodeCell and TSEC HACKS meant designing not just software, but the conditions for other people to ship their first thing.</p></div></section>

        <section id="graph" className="chapter-section section-pad"><div className="section-kicker"><span>07</span><span>KNOWLEDGE GRAPH / CAPABILITY MATRIX</span><span>LIVE MAP</span></div><div className="graph-layout"><h2>What I reach for<br /><em>when it gets hard.</em></h2><div className="capability-grid">{[["BUILD", "Python", "TypeScript", "Next.js", "Postgres"], ["THINK", "RAG", "Agents", "Evaluation", "Systems"], ["EXPLORE", "Computer Vision", "NLP", "Research", "Writing"]].map(([group, ...items]) => <div key={group} className="capability-group"><span>{group}</span>{items.map((item) => <button key={item} onClick={() => setActive("graph")}>{item}<i>+</i></button>)}</div>)}</div></div></section>

        <section id="unshipped" className="chapter-section section-pad dark-section"><div className="section-kicker"><span>08</span><span>UNSHIPPED</span><span>OPEN LOOPS</span></div><div className="unshipped-layout"><h2>Some systems<br /><em>need more time.</em></h2><ul><li>01 <span>A personal memory layer for creative work.</span></li><li>02 <span>An agent that helps teams disagree better.</span></li><li>03 <span>A public index of useful, small models.</span></li></ul></div></section>

        <section id="now" className="chapter-section section-pad"><div className="section-kicker"><span>09</span><span>NOW / AUGUST 2026</span><span>STATUS: CURIOUS</span></div><div className="now-grid"><h2>Currently<br /><em>following the thread.</em></h2><div><p>Exploring how memory changes the shape of an agent — and how we can make that shape legible to the people using it.</p><span className="status-line"><i /> AVAILABLE FOR THE RIGHT PROBLEM</span></div></div></section>

        <section id="channel" className="channel chapter-section section-pad"><div className="section-kicker"><span>10</span><span>OPEN CHANNEL</span><span>TRANSMISSION READY</span></div><div className="channel-content"><h2>Have a question<br />worth <em>building around?</em></h2><a className="mail-cta" href="mailto:zoya@example.com"><span>zoya@cognitivesystem.dev</span><b>SEND TRANSMISSION ↗</b></a></div><footer><span>Z//CORE — END OF CURRENT CONTEXT</span><span>BUILT WITH INTENT / 2026</span></footer></section>
      </main>

      {thinkMode && <div className="think-overlay"><button className="close-think" onClick={() => setThinkMode(false)}>ESC / CLOSE ×</button><div className="think-map"><p className="eyebrow"><i /> THINK MODE / SYSTEM MAP</p><h2>Every output is<br /><em>a connected decision.</em></h2><div className="map-nodes"><button onClick={() => { setThinkMode(false); document.getElementById("systems")?.scrollIntoView() }}>EXPERIENCE</button><button onClick={() => { setThinkMode(false); document.getElementById("proof")?.scrollIntoView() }}>PROOF</button><button onClick={() => { setThinkMode(false); document.getElementById("graph")?.scrollIntoView() }}>CAPABILITY</button><button onClick={() => { setThinkMode(false); document.getElementById("channel")?.scrollIntoView() }}>QUESTION</button></div><p className="map-note">select a node to inspect the corresponding chapter</p></div></div>}
    </div>
  )
}
