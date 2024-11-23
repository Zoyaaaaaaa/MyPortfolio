
// // "use client";

// // import React from "react";
// // import { AnimatedTooltip } from "./ui/animated-tooltip";

// // const skillCategories = [
// //   {
// //     name: "Frontend",
// //     skills: [
// //       { id: 1, name: "HTML", image: "/images/html.png" },
// //       { id: 2, name: "CSS", image: "/images/css.png" },
// //       { id: 3, name: "JavaScript", image: "/images/javascript.png" },
// //       { id: 4, name: "React", image: "/images/react.png" },
// //       { id: 5, name: "Bootstrap", image: "/images/bootstrap.png" },
// //       { id: 6, name: "Tailwind CSS", image: "/images/tailwind.png" },
// //       { id: 7, name: "Streamlit", image: "/images/streamlit.png" },
// //     ],
// //   },
// //   {
// //     name: "Backend",
// //     skills: [
// //       { id: 8, name: "Node.js", image: "/images/nodejs.png" },
// //       { id: 9, name: "Express.js", image: "/images/express.png" },
// //       { id: 10, name: "MongoDB", image: "/images/mongodb.png" },
// //       { id: 11, name: "MySQL", image: "/images/mysql.png" },
// //       { id: 12, name: "Auth/Cookies", image: "/images/auth.png" },
// //       { id: 13, name: "REST API", image: "/images/restapi.png" },
// //       { id: 14, name: "Fast API", image: "/images/fastapi.png" },
// //       { id: 15, name: "Firebase", image: "/images/firebase.png" },
// //       { id: 16, name: "Flask", image: "/images/flask.png" },
// //     ],
// //   },
// //   {
// //     name: "Other Technologies",
// //     skills: [
// //       { id: 17, name: "Gen AI", image: "/images/ai.jpg" },
// //       { id: 18, name: "Fine Tuning", image: "/images/finetuning.png" },
// //       { id: 19, name: "TypeScript", image: "/images/typescript.png" },
// //       { id: 20, name: "Web Scraping", image: "/images/webscraping.png" },
// //       { id: 21, name: "OpenCV", image: "/images/opencv.png" },
// //       { id: 22, name: "Next.js", image: "/images/nextjs.png" },
// //       { id: 23, name: "EJS", image: "/images/ejs.png" },
// //       { id: 24, name: "Git", image: "/images/git.png" },
// //     ],
// //   },
// // ];

// // export function SkillsShowcase() {
// //   return (
// //     <div className="min-h-screen bg-none py-12 px-4">
// //       <div className="max-w-6xl mx-auto">
// //         <h2 className="text-4xl font-bold text-center text-white mb-16">
// //           My Skills
// //         </h2>
        
// //         <div className="space-y-16">
// //           {skillCategories.map((category) => (
// //             <div key={category.name} className="relative">
// //               <h3 className="text-2xl font-semibold text-gray-300 mb-8 text-center">
// //                 {category.name}
// //               </h3>
// //               <div className="flex flex-wrap justify-center gap-8">
// //                 <AnimatedTooltip
// //                   items={category.skills.map((skill) => ({
// //                     id: skill.id,
// //                     name: skill.name,
// //                     designation: category.name,
// //                     image: skill.image,
// //                   }))}
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import React from "react";
// import { AnimatedTooltip } from "./ui/animated-tooltip";

// const skillCategories = [
//   {
//     name: "Frontend",
//     skills: [
//       { id: 1, name: "HTML", image: "/images/html.png" },
//       { id: 2, name: "CSS", image: "/images/css.png" },
//       { id: 3, name: "JavaScript", image: "/images/javascript.png" },
//       { id: 4, name: "React", image: "/images/react.png" },
//       { id: 5, name: "Bootstrap", image: "/images/bootstrap.png" },
//       { id: 6, name: "Tailwind CSS", image: "/images/tailwind.png" },
//       { id: 7, name: "Streamlit", image: "/images/streamlit.png" },
//     ],
//   },
//   {
//     name: "Backend",
//     skills: [
//       { id: 8, name: "Node.js", image: "/images/nodejs.png" },
//       { id: 9, name: "Express.js", image: "/images/express.png" },
//       { id: 10, name: "MongoDB", image: "/images/mongodb.png" },
//       { id: 11, name: "MySQL", image: "/images/mysql.png" },
//       { id: 12, name: "Auth/Cookies", image: "/images/auth.png" },
//       { id: 13, name: "REST API", image: "/images/restapi.png" },
//       { id: 14, name: "Fast API", image: "/images/fastapi.png" },
//       { id: 15, name: "Firebase", image: "/images/firebase.png" },
//       { id: 16, name: "Flask", image: "/images/flask.png" },
//     ],
//   },
//   {
//     name: "Other Technologies",
//     skills: [
//       { id: 17, name: "Gen AI", image: "/images/ai.jpg" },
//       { id: 18, name: "Fine Tuning", image: "/images/finetuning.png" },
//       { id: 19, name: "TypeScript", image: "/images/typescript.png" },
//       { id: 20, name: "Web Scraping", image: "/images/webscraping.png" },
//       { id: 21, name: "OpenCV", image: "/images/opencv.png" },
//       { id: 22, name: "Next.js", image: "/images/nextjs.png" },
//       { id: 23, name: "EJS", image: "/images/ejs.png" },
//       { id: 24, name: "Git", image: "/images/git.png" },
//     ],
//   },
// ];

// export function SkillsShowcase() {
//   return (
//     <div className="relative w-full">
//       {/* Background gradient effects */}
//       <div className="absolute top-0 -z-10 h-full w-full bg-black">
//         <div className="absolute h-full w-full bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-emerald-500/10" />
//         <div className="absolute h-full w-full bg-gradient-to-t from-black via-black/50 to-black/0" />
//       </div>

//       <div className="relative min-h-screen py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 text-center text-transparent bg-clip-text mb-16">
//             My Skills
//           </h2>
          
//           <div className="space-y-16">
//             {skillCategories.map((category) => (
//               <div key={category.name} className="relative group">
//                 <h3 className="text-2xl font-semibold mb-8 text-center">
//                   <span className="bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 text-transparent bg-clip-text">
//                     {category.name}
//                   </span>
//                 </h3>
                
//                 {/* Category background glow effect */}
//                 <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-500/20 blur-3xl" />
//                 </div>
                
//                 <div className="flex flex-wrap justify-center gap-8">
//                   <AnimatedTooltip
//                     items={category.skills.map((skill) => ({
//                       id: skill.id,
//                       name: skill.name,
//                       designation: category.name,
//                       image: skill.image,
//                     }))}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { id: 1, name: "HTML", image: "/images/html.png" },
      { id: 2, name: "CSS", image: "/images/css.png" },
      { id: 3, name: "JavaScript", image: "/images/javascript.png" },
      { id: 4, name: "React", image: "/images/react.jpg" },
      { id: 5, name: "Bootstrap", image: "/images/bootstrap.png" },
      { id: 6, name: "Tailwind CSS", image: "/images/tailwind.png" },
      { id: 7, name: "Streamlit", image: "/images/streamlit.png" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { id: 8, name: "Node.js", image: "/images/nodejs.jpg" },
      { id: 9, name: "Express.js", image: "/images/expressjs.jpg" },
      { id: 10, name: "MongoDB", image: "/images/mongo.png" },
      { id: 11, name: "MySQL", image: "/images/sql.png" },
      { id: 12, name: "Auth/Cookies", image: "/images/cookies.jpg" },
      { id: 13, name: "REST API", image: "/images/restapi.jpg" },
      { id: 14, name: "Fast API", image: "/images/fastapi.png" },
      { id: 15, name: "Firebase", image: "/images/firebase.jpg" },
      { id: 16, name: "Flask", image: "/images/flask.jpg" },
    ],
  },
  {
    name: "Other Technologies",
    skills: [
      { id: 17, name: "Gen AI", image: "/images/ai.jpg" },
      { id: 18, name: "Fine Tuning", image: "/images/fintuning.png" },
      { id: 19, name: "TypeScript", image: "/images/typescript.png" },
      { id: 20, name: "Web Scraping", image: "/images/webscraping.png" },
      { id: 21, name: "OpenCV", image: "/images/opencv.png" },
      { id: 22, name: "Next.js", image: "/images/nextjs.png" },
      { id: 23, name: "EJS", image: "/images/ejs.jpg" },
      { id: 24, name: "Git", image: "/images/git.png" },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function SkillsShowcase() {
  return (
    <section className="w-full relative overflow-hidden mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.h2
          {...fadeInUp}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-12"
        >
          My Skills
        </motion.h2>
          
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.2,
                ease: "easeOut"
              }}
              className="relative group"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.3 }}
                className="text-2xl font-semibold mb-6 text-center"
              >
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                  {category.name}
                </span>
              </motion.h3>
              
              {/* Category background glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 blur-3xl" />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: categoryIndex * 0.4,
                  ease: "easeOut"
                }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-center gap-8">
                  <AnimatedTooltip
                    items={category.skills.map((skill) => ({
                      id: skill.id,
                      name: skill.name,
                      designation: category.name,
                      image: skill.image,
                    }))}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}