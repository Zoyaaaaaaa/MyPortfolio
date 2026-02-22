// import Image from "next/image"
// import Link from "next/link"
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card"
// import { ExternalLink, Github, Star, Zap } from "lucide-react"

// interface Project {
//   title: string
//   description: string
//   link: string
//   externalLink?: string
//   image: string
//   category?: string
//   featured?: boolean
// }

// export function Projects() {
//   const projects: Project[] = [
//     {
//       title: "Deal Detective",
//       description:
//         "Shopping intelligence agent featuring real-time price tracking and market analysis. Never overpay with **automated alerts** and competitor comparisons.",
//       link: "https://deal-detective-tan.vercel.app/",
//       externalLink: "",
//       image: "/images/DealDetective.png",
//       category: "E-commerce",
//       featured: true,
//     },
//     {
//       title: "InterviewMate",
//       description:
//         "AI-powered interview preparation platform with personalized feedback and practice sessions. Master your interviews with **intelligent coaching**.",
//       link: "https://interview-ai-umber-alpha.vercel.app/",
//       externalLink: "https://github.com/Zoyaaaaaaa/InterviewAI",
//       image: "/images/interviewmate.png",
//       category: "AI/ML",
//       featured: true,
//     },
//     {
//       title: "VidVoyager",
//       description:
//         "AI-powered video insights engine that extracts key information from YouTube content using advanced NLP. Navigate hours of content in minutes with **smart summarization** and interactive Q&A.",
//       link: "https://github.com/Zoyaaaaaaa/VidVoyager",
//       externalLink: "",
//       image: "/images/vidvoyger.jpg",
//       category: "AI/ML",
//       featured: true,
//     },
//     {
//       title: "AI Strategy & Use Case Research Agent",
//       description:
//         "Intelligent research companion delivering actionable insights through OpenAI integration. Transform business decisions with **strategic AI solutions** for your organization.",
//       link: "https://github.com/Zoyaaaaaaa/Market-Research-AI-Agents",
//       externalLink: "https://market-research-ai-agents-cssd98plipyemqctfk5umt.streamlit.app/",
//       image: "/images/MarketResearch.png",
//       category: "AI/ML",
//     },
//     {
//       title: "PneumoEase",
//       description:
//         "Medical diagnostic tool using deep learning to detect pneumonia from X-rays with exceptional accuracy. Empowering healthcare professionals with **AI-assisted diagnoses**.",
//       link: "https://github.com/Zoyaaaaaaa/PneumoniaDetection",
//       externalLink: "",
//       image: "/images/pneumoease.png",
//       category: "Healthcare",
//     },
//     {
//       title: "UniFete",
//       description:
//         "Campus event ecosystem with intelligent scheduling and analytics. Streamlines institutional event management with **sophisticated approval workflows** for seamless operations.",
//       link: "https://www.youtube.com/watch?v=LXQkMhHjCoQ",
//       externalLink: "",
//       image: "/images/UniFete.jpg",
//       category: "Web App",
//     },
//     {
//       title: "IntelliGraph",
//       description:
//         "Data visualization platform combining PandasAI intelligence with Plotly graphics. Transform complex datasets into **interactive insights** through visual exploration.",
//       link: "https://github.com/Zoyaaaaaaa/IntelliGraph",
//       externalLink: "",
//       image: "/images/igraph.png",
//       category: "Data Viz",
//     },
//     {
//       title: "Edumail",
//       description:
//         "AI-powered email system for EdTech using LangChain and LangGraph. Intelligently categorizes and generates **contextual responses** for educational communication.",
//       link: "https://github.com/Zoyaaaaaaa/Edumail",
//       externalLink: "https://edumail-jdfkd3fkaawzsnqxtjyftl.streamlit.app/",
//       image: "/images/edumail.png",
//       category: "EdTech",
//     },
//     {
//       title: "Editify",
//       description:
//         "Professional image studio powered by OpenCV with artistic transformations. Beyond basic editing with **edge detection algorithms** and precision tools.",
//       link: "https://github.com/Zoyaaaaaaa/Editify",
//       externalLink: "",
//       image: "/images/editify.png",
//       category: "Image Processing",
//     },
//     {
//       title: "Odyssey Quest",
//       description:
//         "Immersive travel platform with Mapbox integration and community-curated reviews. Discover hidden gems with **intelligent location suggestions**.",
//       link: "https://odyssey-quest.onrender.com/listings",
//       externalLink: "",
//       image: "/images/OdysseyQuest.jpg",
//       category: "Travel",
//     },
//     {
//       title: "Talk to Website",
//       description:
//         "Conversational AI that transforms websites into interactive knowledge bases. Extract information with **semantic search** and natural language queries.",
//       link: "https://github.com/Zoyaaaaaaa/TalkToWebsite",
//       externalLink: "",
//       image: "/images/talktowebsite.jpg",
//       category: "AI/ML",
//     },
//   ]

//   const getCategoryColor = (category: string) => {
//     const colors = {
//       "AI/ML": "from-emerald-500/20 to-blue-500/20 border-emerald-500/30",
//       Healthcare: "from-green-500/20 to-emerald-500/20 border-green-500/30",
//       "Web App": "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
//       "Data Viz": "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
//       "E-commerce": "from-blue-500/20 to-emerald-500/20 border-blue-500/30",
//       EdTech: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
//       "Image Processing": "from-teal-500/20 to-emerald-500/20 border-teal-500/30",
//       Travel: "from-emerald-500/20 to-blue-500/20 border-emerald-500/30",
//     }
//     return colors[category as keyof typeof colors] || "from-gray-500/20 to-slate-500/20 border-gray-500/30"
//   }

//   const getCategoryTextColor = (category: string) => {
//     const colors = {
//       "AI/ML": "text-emerald-400",
//       Healthcare: "text-green-400",
//       "Web App": "text-blue-400",
//       "Data Viz": "text-emerald-400",
//       "E-commerce": "text-blue-400",
//       EdTech: "text-cyan-400",
//       "Image Processing": "text-teal-400",
//       Travel: "text-emerald-400",
//     }
//     return colors[category as keyof typeof colors] || "text-gray-400"
//   }

//   return (
//     <div className="min-h-screen w-full">
//       <div className="container mx-auto px-4 py-16">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-6">
//             <Zap className="w-4 h-4 text-emerald-400" />
//             <span className="text-sm font-medium text-emerald-300">Featured Work</span>
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold text-emerald-400 mb-6">Featured Projects</h2>

//           <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             A collection of innovative solutions spanning AI, healthcare, and web technologies
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <CardContainer key={index} className="inter-var">
//               <CardBody
//                 className={`
//                 relative group/card w-full h-auto rounded-2xl p-6 border backdrop-blur-sm
//                 bg-gradient-to-br from-black/90 via-gray-950/90 to-black/90
//                 border-gray-800 hover:border-gray-700/50
//                 transition-all duration-500 ease-out
//                 hover:shadow-2xl hover:shadow-emerald-500/10
//                 ${project.featured ? "ring-1 ring-emerald-500/20" : ""}
//               `}
//               >
//                 {/* Featured Badge */}
//                 {project.featured && (
//                   <CardItem translateZ="10" className="absolute -top-2 -right-2">
//                     <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs font-medium">
//                       <Star className="w-3 h-3 fill-current" />
//                       Featured
//                     </div>
//                   </CardItem>
//                 )}

//                 {/* Category Badge */}
//                 {project.category && (
//                   <CardItem translateZ="20" className="mb-4">
//                     <div
//                       className={`
//                       inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border
//                       bg-gradient-to-r ${getCategoryColor(project.category)}
//                       ${getCategoryTextColor(project.category)}
//                     `}
//                     >
//                       {project.category}
//                     </div>
//                   </CardItem>
//                 )}

//                 {/* Project Title */}
//                 <CardItem
//                   translateZ="50"
//                   className="text-2xl font-bold text-emerald-400 mb-3 group-hover/card:text-emerald-300 transition-colors duration-300"
//                 >
//                   {project.title}
//                 </CardItem>

//                 {/* Project Description */}
//                 <CardItem
//                   as="div"
//                   translateZ="60"
//                   className="text-gray-300 text-sm leading-relaxed mb-6"
//                   dangerouslySetInnerHTML={{
//                     __html: project.description.replace(
//                       /\*\*(.*?)\*\*/g,
//                       '<span class="font-semibold text-sky-300">$1</span>'
//                     ),
//                   }} children={undefined}                />

//                 {/* Project Image */}
//                 <CardItem translateZ="100" className="w-full mb-6">
//                   <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
//                     <Image
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title}
//                       fill
//                       className="object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/card:brightness-110"
//                     />
//                     {/* Image Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

//                     {/* Hover Icon */}
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300">
//                       <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
//                         <ExternalLink className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </div>
//                 </CardItem>

//                 {/* Action Buttons */}
//                 <div className="flex items-center justify-between">
//                   <CardItem
//                     translateZ={20}
//                     as={Link}
//                     href={project.link}
//                     target="_blank"
//                     className="group/button flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
//                   >
//                     <span>View Project</span>
//                     <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
//                   </CardItem>

//                   <CardItem
//                     translateZ={20}
//                     as="button"
//                     className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 text-gray-400 hover:text-white transition-all duration-300"
//                   >
//                     <Github className="w-4 h-4" />
//                   </CardItem>
//                 </div>

//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
//               </CardBody>
//             </CardContainer>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 text-gray-300 hover:text-white transition-colors duration-300">
//             <span className="text-sm">More projects coming soon</span>
//             <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Projects;

import Image from "next/image"
import Link from "next/link"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"
import { ExternalLink, Github, Star, Zap } from "lucide-react"

interface Project {
  title: string
  description: string
  link: string
  externalLink?: string
  image: string
  category?: string
  featured?: boolean
  githubLink?: string
  quirkyNote?:string
}

export function Projects() {
    const projects: Project[] = [
    {
      title: "Deal Detective",
      description:
        "Ever felt like you're being robbed at checkout? This shopping buddy tracks prices and whispers sweet savings in your ear. No more buyer's remorse!",
      link: "https://deal-detective-tan.vercel.app/",
      externalLink: "",
      image: "/images/DealDetective.png",
      category: "E-commerce",
      featured: true,
      githubLink: "https://github.com/Zoyaaaaaaa/deal-detective",
      quirkyNote: "💰 Saved users $10K+ already!"
    },
    {
      title: "InterviewMate",
      description:
        "Nervous about interviews? This AI coach won't judge your awkward pauses. Practice until you're so smooth, they'll think you're the CEO already.",
      link: "https://interview-ai-umber-alpha.vercel.app/",
      externalLink: "https://github.com/Zoyaaaaaaa/InterviewAI",
      image: "/images/interviewmate.png",
      category: "AI/ML",
      featured: true,
      githubLink: "https://github.com/Zoyaaaaaaa/InterviewAI",
      quirkyNote: "🎭 Your personal hype person"
    },
    {
      title: "VidVoyager",
      description:
        "Turn those 3-hour YouTube tutorials into bite-sized wisdom nuggets. Because who has time to watch everything? Let AI do the heavy lifting while you grab coffee.",
      link: "https://github.com/Zoyaaaaaaa/VidVoyager",
      externalLink: "",
      image: "/images/vidvoyger.jpg",
      category: "AI/ML",
      featured: true,
      githubLink: "https://github.com/Zoyaaaaaaa/VidVoyager",
      quirkyNote: "📹 Converts hours to minutes"
    },
    {
      title: "AI Strategy & Use Case Research Agent",
      description:
        "This little research genius digs up business insights faster than you can say 'market analysis'. It's like having a super smart intern who never needs coffee breaks.",
      link: "https://market-research-ai-agents-cssd98plipyemqctfk5umt.streamlit.app/",
      externalLink: "https://market-research-ai-agents-cssd98plipyemqctfk5umt.streamlit.app/",
      image: "/images/MarketResearch.png",
      category: "AI/ML",
      githubLink: "https://github.com/Zoyaaaaaaa/Market-Research-AI-Agents",
      quirkyNote: "🤓 Better than consulting fees"
    },
    {
      title: "PneumoEase",
      description:
        "Teaching computers to read X-rays like a radiologist (but faster and without the medical school debt). Helping doctors catch pneumonia before it crashes the party.",
      link: "https://github.com/Zoyaaaaaaa/PneumoniaDetection",
      externalLink: "",
      image: "/images/pneumoease.png",
      category: "Healthcare",
      githubLink: "https://github.com/Zoyaaaaaaa/PneumoniaDetection",
      quirkyNote: "🏥 Saving lives, one pixel at a time"
    },
    {
      title: "UniFete",
      description:
        "Campus events don't have to be chaos! This platform makes organizing college fests as smooth as your morning coffee (when the machine actually works).",
      link: "https://www.youtube.com/watch?v=LXQkMhHjCoQ",
      externalLink: "",
      image: "/images/UniFete.jpg",
      category: "Web App",
      githubLink: "https://github.com/Zoyaaaaaaa/UniFete",
      quirkyNote: "🎉 From chaos to celebration"
    },
    {
      title: "IntelliGraph",
      description:
        "Turns boring spreadsheets into gorgeous charts that even your non-techie boss will understand. Data visualization made so pretty, you'll want to frame it.",
      link: "https://github.com/Zoyaaaaaaa/IntelliGraph",
      externalLink: "",
      image: "/images/igraph.png",
      category: "Data Viz",
      githubLink: "https://github.com/Zoyaaaaaaa/IntelliGraph",
      quirkyNote: "📊 Making Excel jealous since 2024"
    },
    {
      title: "Edumail",
      description:
        "Smart email system that actually gets education. No more 'Reply All' disasters or lost homework submissions. Finally, emails that make sense in school!",
      link: "https://edumail-jdfkd3fkaawzsnqxtjyftl.streamlit.app/",
      externalLink: "https://edumail-jdfkd3fkaawzsnqxtjyftl.streamlit.app/",
      image: "/images/edumail.png",
      category: "EdTech",
      githubLink: "https://github.com/Zoyaaaaaaa/Edumail",
      quirkyNote: "📧 No more 'Can you repeat that?'"
    },
    {
      title: "Editify",
      description:
        "Photo editing with the power of computer vision. Think Photoshop, but the algorithms do the heavy lifting. Perfect for when you need magic but lack artistic skills.",
      link: "https://github.com/Zoyaaaaaaa/Editify",
      externalLink: "",
      image: "/images/editify.png",
      category: "Image Processing",
      githubLink: "https://github.com/Zoyaaaaaaa/Editify",
      quirkyNote: "🎨 Turning pixels into art"
    },
    {
      title: "Odyssey Quest",
      description:
        "Travel planning that doesn't suck! Find hidden gems and avoid tourist traps with community wisdom. Because the best adventures aren't in guidebooks.",
      link: "https://odyssey-quest.onrender.com/listings",
      externalLink: "",
      image: "/images/OdysseyQuest.jpg",
      category: "Travel",
      githubLink: "https://github.com/Zoyaaaaaaa/OdysseyQuest",
      quirkyNote: "🗺️ Adventure awaits!"
    },
    {
      title: "Talk to Website",
      description:
        "Ever wanted to have a chat with a website? Now you can! Ask questions and get answers without endless scrolling. It's like having a conversation with the internet.",
      link: "https://github.com/Zoyaaaaaaa/TalkToWebsite",
      externalLink: "",
      image: "/images/talktowebsite.jpg",
      category: "AI/ML",
      githubLink: "https://github.com/Zoyaaaaaaa/TalkToWebsite",
      quirkyNote: "💬 The internet finally talks back"
    },
    {
      title: "Indian Legal Assistant",
      description:
        "Fine-tuned Llama-3.2-3B using QLoRA on Indian constitutional and legal datasets. Delivers domain-specific legal understanding with optimized training reducing loss from 2.6 to 1.5 using Unsloth and TRL SFTTrainer.",
      link: "https://huggingface.co/zo0302/indian_legal_bot",
      externalLink: "https://huggingface.co/zo0302/indian_legal_bot",
      image: "/images/legal-assistant.png",
      category: "AI/ML",
      featured: true,
      githubLink: "https://huggingface.co/zo0302/indian_legal_bot",
      quirkyNote: "⚖️ Legal expertise, model efficiency"
    },
  ]



  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "from-emerald-500/20 to-blue-500/20 border-emerald-500/30",
      Healthcare: "from-green-500/20 to-emerald-500/20 border-green-500/30",
      "Web App": "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      "Data Viz": "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
      "E-commerce": "from-blue-500/20 to-emerald-500/20 border-blue-500/30",
      EdTech: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
      "Image Processing": "from-teal-500/20 to-emerald-500/20 border-teal-500/30",
      Travel: "from-emerald-500/20 to-blue-500/20 border-emerald-500/30",
    }
    return colors[category as keyof typeof colors] || "from-gray-500/20 to-slate-500/20 border-gray-500/30"
  }

  const getCategoryTextColor = (category: string) => {
    const colors = {
      "AI/ML": "text-emerald-400",
      Healthcare: "text-green-400",
      "Web App": "text-blue-400",
      "Data Viz": "text-emerald-400",
      "E-commerce": "text-blue-400",
      EdTech: "text-cyan-400",
      "Image Processing": "text-teal-400",
      Travel: "text-emerald-400",
    }
    return colors[category as keyof typeof colors] || "text-gray-400"
  }

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-6">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300">Featured Work</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-emerald-400 mb-6">Featured Projects</h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of innovative solutions spanning AI, healthcare, and web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody
                className={`
                relative group/card w-full h-auto rounded-2xl p-6 border backdrop-blur-sm
                bg-gradient-to-br from-black/90 via-gray-950/90 to-black/90
                border-gray-800 hover:border-gray-700/50
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-emerald-500/10
                ${project.featured ? "ring-1 ring-emerald-500/20" : ""}
              `}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <CardItem translateZ="10" className="absolute -top-2 -right-2">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  </CardItem>
                )}

                {/* Category Badge */}
                {project.category && (
                  <CardItem translateZ="20" className="mb-4">
                    <div
                      className={`
                      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border
                      bg-gradient-to-r ${getCategoryColor(project.category)}
                      ${getCategoryTextColor(project.category)}
                    `}
                    >
                      {project.category}
                    </div>
                  </CardItem>
                )}

                {/* Project Title */}
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-emerald-400 mb-3 group-hover/card:text-emerald-300 transition-colors duration-300"
                >
                  {project.title}
                </CardItem>
                  {project.quirkyNote && (
                  <CardItem translateZ="30" className="mb-3">
                    <div className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      {project.quirkyNote}
                    </div>
                  </CardItem>
                )}


                {/* Project Description */}
                <CardItem
                  as="div"
                  translateZ="60"
                  className="text-gray-300 text-sm leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{
                    __html: project.description.replace(
                      /\*\*(.*?)\*\*/g,
                      '<span class="font-semibold text-sky-300">$1</span>'
                    ),
                  }} children={undefined}                />

                {/* Project Image */}
                <CardItem translateZ="100" className="w-full mb-6">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/card:brightness-110"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    {/* Hover Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                      <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </CardItem>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="_blank"
                    className="group/button flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                  </CardItem>

                  {project.githubLink && (
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.githubLink}
                      target="_blank"
                      className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </CardItem>
                  )}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 text-gray-300 hover:text-white transition-colors duration-300">
            <span className="text-sm">More projects coming soon</span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
