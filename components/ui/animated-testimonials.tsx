// "use client";

// import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// type Testimonial = {
//   quote: string;
//   name: string;
//   designation: string;
//   src: string;
// };

// export const AnimatedTestimonials = ({
//   testimonials,
//   autoplay = false,
// }: {
//   testimonials: Testimonial[];
//   autoplay?: boolean;
// }) => {
//   const [active, setActive] = useState(0);

//   const handleNext = () => {
//     setActive((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const isActive = (index: number) => {
//     return index === active;
//   };

//   useEffect(() => {
//     if (autoplay) {
//       const interval = setInterval(handleNext, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [autoplay]);

//   const randomRotateY = () => {
//     return Math.floor(Math.random() * 21) - 10;
//   };

//   return (
//     <div className="max-w-5xl mx-auto antialiased font-sans px-6 md:px-12 py-16">
//       <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//         {/* Image Section */}
//         <div className="relative">
//           <div className="relative h-[500px] w-full shadow-lg">
//             <AnimatePresence>
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={testimonial.src}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.9,
//                     z: -100,
//                     rotate: randomRotateY(),
//                   }}
//                   animate={{
//                     opacity: isActive(index) ? 1 : 0.7,
//                     scale: isActive(index) ? 1 : 0.95,
//                     z: isActive(index) ? 0 : -100,
//                     rotate: isActive(index) ? 0 : randomRotateY(),
//                     zIndex: isActive(index)
//                       ? 999
//                       : testimonials.length + 2 - index,
//                     y: isActive(index) ? [0, -50, 0] : 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.9,
//                     z: 100,
//                     rotate: randomRotateY(),
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 origin-bottom"
//                 >
//                   <Image
//                     src={testimonial.src}
//                     alt={testimonial.name}
//                     width={700}
//                     height={700}
//                     draggable={false}
//                     className="h-full w-full rounded-3xl object-cover object-center"
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="flex flex-col justify-between gap-6 py-6">
//           <motion.div
//             key={active}
//             initial={{
//               y: 30,
//               opacity: 0,
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//             }}
//             exit={{
//               y: -30,
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.3,
//               ease: "easeInOut",
//             }}
//           >
//             <h3 className="text-3xl font-bold dark:text-white text-gray-900">
//               {testimonials[active].name}
//             </h3>
//             <p className="text-md text-gray-600 dark:text-neutral-400 mt-2">
//               {testimonials[active].designation}
//             </p>
//             <motion.p
//               className="text-lg md:text-xl text-gray-700 dark:text-neutral-300 mt-6 leading-relaxed"
//             >
//               {testimonials[active].quote.split(" ").map((word, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{
//                     filter: "blur(10px)",
//                     opacity: 0,
//                     y: 5,
//                   }}
//                   animate={{
//                     filter: "blur(0px)",
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.2,
//                     ease: "easeInOut",
//                     delay: 0.02 * index,
//                   }}
//                   className="inline-block"
//                 >
//                   {word}&nbsp;
//                 </motion.span>
//               ))}
//             </motion.p>
//           </motion.div>

//           {/* Navigation Buttons */}
//           <div className="flex gap-6 pt-8">
//             <button
//               onClick={handlePrev}
//               className="h-12 w-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group"
//             >
//               <IconArrowLeft className="h-6 w-6 text-gray-800 dark:text-neutral-400 group-hover:scale-110 transition-transform duration-300" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="h-12 w-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group"
//             >
//               <IconArrowRight className="h-6 w-6 text-gray-800 dark:text-neutral-400 group-hover:scale-110 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
