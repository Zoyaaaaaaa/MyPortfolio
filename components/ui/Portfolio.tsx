// // import React from 'react';
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Github, ExternalLink, Mail } from 'lucide-react';

// // const SkillCard = ({ icon, title }) => (
// //   <div className="relative group">
// //     <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
// //     <div className="relative px-6 py-4 bg-black rounded-lg leading-none flex items-center space-x-3">
// //       <div className="text-pink-600 group-hover:text-pink-500">{icon}</div>
// //       <span className="text-gray-100 group-hover:text-white transition duration-200">{title}</span>
// //     </div>
// //   </div>
// // );

// // const ProjectCard = ({ title:string description, image, tech, link }) => (
// //   <Card className="group relative overflow-hidden rounded-xl bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
// //     <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/80 z-10" />
// //     <img 
// //       src={image || "/api/placeholder/400/300"} 
// //       alt={title}
// //       className="object-cover w-full h-48 transform group-hover:scale-105 transition-transform duration-300"
// //     />
// //     <CardContent className="relative z-20 p-5">
// //       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
// //       <p className="text-zinc-300 text-sm mb-4">{description}</p>
// //       <div className="flex flex-wrap gap-2 mb-4">
// //         {tech?.map((t, i) => (
// //           <span key={i} className="px-2 py-1 text-xs rounded-full bg-pink-600/20 text-pink-400">
// //             {t}
// //           </span>
// //         ))}
// //       </div>
// //       {link && (
// //         <Button variant="outline" className="hover:bg-pink-600 hover:text-white transition-colors">
// //           <ExternalLink className="w-4 h-4 mr-2" />
// //           View Project
// //         </Button>
// //       )}
// //     </CardContent>
// //   </Card>
// // );

// // const Portfolio = () => {
// //   const projects = [
// //     {
// //       title: "Odyssey Quest",
// //       description: "A travel website with seamless Mapbox integration",
// //       image: "/api/placeholder/400/300",
// //       tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
// //       link: "https://odyssey-quest.onrender.com/listings"
// //     },
// //     {
// //       title: "Deal Detective",
// //       description: "Real-time data insights for smarter shopping and product management",
// //       image: "/api/placeholder/400/300",
// //       tech: ["Next.js", "MongoDB"],
// //       link: "https://deal-detective-tan.vercel.app/"
// //     },
// //     {
// //       title: "Editify",
// //       description: "Advanced image editing platform with cutting-edge features",
// //       image: "/api/placeholder/400/300",
// //       tech: ["OpenCV", "Flask"],
// //       link: "https://github.com/Zoyaaaaaaa/Editify"
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-black text-white">
// //       {/* Hero Section */}
// //       <section className="relative h-screen flex items-center justify-center overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 to-purple-600/20 z-0" />
// //         <div className="container mx-auto px-4 z-10">
// //           <div className="text-center">
// //             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
// //               Portfolio
// //             </h1>
// //             <p className="text-xl md:text-2xl text-zinc-300 mb-8">
// //               Full Stack Developer & UI/UX Enthusiast
// //             </p>
// //             <Button className="bg-pink-600 hover:bg-pink-700 text-white">
// //               <Mail className="w-4 h-4 mr-2" />
// //               Contact Me
// //             </Button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Skills Section */}
// //       <section className="py-20 bg-zinc-900/50">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-3xl font-bold mb-12 text-center">Technologies</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             <SkillCard icon="🌐" title="TypeScript" />
// //             <SkillCard icon="⚛️" title="Next.js" />
// //             <SkillCard icon="🔍" title="OpenCV" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Projects Section */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {projects.map((project, index) => (
// //               <ProjectCard key={index} {...project} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       <section className="py-20 bg-zinc-900/50">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-2xl mx-auto text-center">
// //             <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
// //             <p className="text-zinc-300 mb-8">
// //               Ready to build something amazing? Reach out and let's make it happen!
// //             </p>
// //             <form className="space-y-4">
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 className="w-full p-3 bg-black border border-zinc-800 rounded-lg focus:border-pink-600 focus:ring-pink-600"
// //               />
// //               <textarea
// //                 placeholder="Your message"
// //                 rows={4}
// //                 className="w-full p-3 bg-black border border-zinc-800 rounded-lg focus:border-pink-600 focus:ring-pink-600"
// //               />
// //               <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
// //                 Send Message
// //               </Button>
// //             </form>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Portfolio;
// 'use client'

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Github, ExternalLink, Mail, Linkedin, Twitter } from 'lucide-react'

// const SkillCard = ({ icon, title }: { icon: string; title: string }) => (
//   <motion.div
//     className="relative group"
//     whileHover={{ scale: 1.05 }}
//     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//   >
//     <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
//     <div className="relative px-6 py-4 bg-zinc-900 rounded-lg leading-none flex items-center space-x-3">
//       <div className="text-pink-600 group-hover:text-pink-500 text-2xl">{icon}</div>
//       <span className="text-gray-100 group-hover:text-white transition duration-200">{title}</span>
//     </div>
//   </motion.div>
// )

// const ProjectCard = ({ title, description, image, tech, link }: {
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
//   link: string;
// }) => (
//   <motion.div
//     whileHover={{ y: -5 }}
//     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//   >
//     <Card className="group relative overflow-hidden rounded-xl bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
//       <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/80 z-10" />
//       <img 
//         src={image || "/placeholder.svg?height=300&width=400"}
//         alt={title}
//         className="object-cover w-full h-48 transform group-hover:scale-105 transition-transform duration-300"
//       />
//       <CardContent className="relative z-20 p-5">
//         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//         <p className="text-zinc-300 text-sm mb-4">{description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {tech?.map((t, i) => (
//             <span key={i} className="px-2 py-1 text-xs rounded-full bg-pink-600/20 text-pink-400">
//               {t}
//             </span>
//           ))}
//         </div>
//         {link && (
//           <Button variant="outline" className="hover:bg-pink-600 hover:text-white transition-colors" asChild>
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               <ExternalLink className="w-4 h-4 mr-2" />
//               View Project
//             </a>
//           </Button>
//         )}
//       </CardContent>
//     </Card>
//   </motion.div>
// )

// const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-zinc-400 hover:text-pink-500 transition-colors"
//   >
//     <Icon className="w-6 h-6" />
//   </a>
// )

// export default function Portfolio() {
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const projects = [
//     {
//       title: "Odyssey Quest",
//       description: "A travel website with seamless Mapbox integration",
//       image: "/placeholder.svg?height=300&width=400",
//       tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
//       link: "https://odyssey-quest.onrender.com/listings"
//     },
//     {
//       title: "Deal Detective",
//       description: "Real-time data insights for smarter shopping and product management",
//       image: "/placeholder.svg?height=300&width=400",
//       tech: ["Next.js", "MongoDB"],
//       link: "https://deal-detective-tan.vercel.app/"
//     },
//     {
//       title: "Editify",
//       description: "Advanced image editing platform with cutting-edge features",
//       image: "/placeholder.svg?height=300&width=400",
//       tech: ["OpenCV", "Flask"],
//       link: "https://github.com/Zoyaaaaaaa/Editify"
//     }
//   ]

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Here you would typically handle the form submission
//     console.log('Form submitted', { email, message })
//     // Reset form fields
//     setEmail('')
//     setMessage('')
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 to-purple-600/20 z-0" />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="container mx-auto px-4 z-10"
//         >
//           <div className="text-center">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
//               John Doe
//             </h1>
//             <p className="text-xl md:text-2xl text-zinc-300 mb-8">
//               Full Stack Developer & UI/UX Enthusiast
//             </p>
//             <Button className="bg-pink-600 hover:bg-pink-700 text-white">
//               <Mail className="w-4 h-4 mr-2" />
//               Contact Me
//             </Button>
//           </div>
//         </motion.div>
//       </section>

//       {/* Skills Section */}
//       <section className="py-20 bg-zinc-900/50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center">Technologies</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <SkillCard icon="🌐" title="TypeScript" />
//             <SkillCard icon="⚛️" title="Next.js" />
//             <SkillCard icon="🔍" title="OpenCV" />
//             <SkillCard icon="🎨" title="Tailwind CSS" />
//             <SkillCard icon="🚀" title="React" />
//             <SkillCard icon="🗄️" title="MongoDB" />
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <ProjectCard key={index} {...project} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-zinc-900/50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-2xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
//             <p className="text-zinc-300 mb-8">
//               Ready to build something amazing? Reach out and let's make it happen!
//             </p>
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 bg-black border border-zinc-800 rounded-lg focus:border-pink-600 focus:ring-pink-600"
//               />
//               <Textarea
//                 placeholder="Your message"
//                 rows={4}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full p-3 bg-black border border-zinc-800 rounded-lg focus:border-pink-600 focus:ring-pink-600"
//               />
//               <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white">
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 bg-zinc-900">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-center space-x-6">
//             <SocialLink href="https://github.com" icon={Github} />
//             <SocialLink href="https://linkedin.com" icon={Linkedin} />
//             <SocialLink href="https://twitter.com" icon={Twitter} />
//           </div>
//           <p className="mt-4 text-center text-zinc-500">
//             © 2024 John Doe. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   )
// }

// YouTubeBot: Unlock YouTube Like Never Before!

// Supercharge your YouTube experience with AI-powered summaries, instant keyword searches, and clickable timestamps. Find exactly what you need in any video—fast, smart, and effortless!