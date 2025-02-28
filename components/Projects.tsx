import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "VidVoyager",
      description:
        "AI-powered video insights engine that extracts key information from YouTube content using advanced NLP. Navigate hours of content in minutes with **smart summarization** and interactive Q&A.",
      link: "https://github.com/Zoyaaaaaaa/VidVoyager",
      image: "/images/vidvoyger.jpg",
    },
    {
      title: "AI Strategy & Use Case Research Agent",
      description:
        "Intelligent research companion delivering actionable insights through OpenAI integration. Transform business decisions with **strategic AI solutions** for your organization.",
      link: "https://github.com/Zoyaaaaaaa/Market-Research-AI-Agents",
      image: "/images/MarketResearch.png",
    },
    {
      title: "PneumoEase",
      description:
        "Medical diagnostic tool using deep learning to detect pneumonia from X-rays with exceptional accuracy. Empowering healthcare professionals with **AI-assisted diagnoses**.",
      link: "https://github.com/Zoyaaaaaaa/PneumoniaDetection",
      image: "/images/pneumoease.png",
    },
    {
      title: "UniFete",
      description:
        "Campus event ecosystem with intelligent scheduling and analytics. Streamlines institutional event management with **sophisticated approval workflows** for seamless operations.",
      link: "https://www.youtube.com/watch?v=LXQkMhHjCoQ",
      image: "/images/UniFete.jpg",
    },
    {
      title: "IntelliGraph",
      description:
        "Data visualization platform combining PandasAI intelligence with Plotly graphics. Transform complex datasets into **interactive insights** through visual exploration.",
      link: "https://github.com/Zoyaaaaaaa/IntelliGraph",
      image: "/images/igraph.png",
    },
    {
      title: "Deal Detective",
      description:
        "Shopping intelligence agent featuring real-time price tracking and market analysis. Never overpay with **automated alerts** and competitor comparisons.",
      link: "https://deal-detective-tan.vercel.app/",
      image: "/images/DealDetective.png",
    },
    {
      title: "Editify",
      description:
        "Professional image studio powered by OpenCV with artistic transformations. Beyond basic editing with **edge detection algorithms** and precision tools.",
      link: "https://github.com/Zoyaaaaaaa/Editify",
      image: "/images/editify.png",
    },
    {
      title: "Odyssey Quest",
      description:
        "Immersive travel platform with Mapbox integration and community-curated reviews. Discover hidden gems with **intelligent location suggestions**.",
      link: "https://odyssey-quest.onrender.com/listings",
      image: "/images/OdysseyQuest.jpg",
    },
    {
      title: "Talk to Website",
      description:
        "Conversational AI that transforms websites into interactive knowledge bases. Extract information with **semantic search** and natural language queries.",
      link: "https://github.com/Zoyaaaaaaa/TalkToWebsite",
      image: "/images/talktowebsite.jpg",
    },
    {
      title: "Edumail",
      description: 
        "AI-powered email system for EdTech using LangChain and LangGraph. Intelligently categorizes and generates **contextual responses** for educational communication.",
      link: "https://github.com/Zoyaaaaaaa/Edumail",
      image: "/images/edumail.png",
    }
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-emerald-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 relative group/card border border-gray-800 hover:border-gray-700/50 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto rounded-xl p-6 transition-all duration-300">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-emerald-400"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-300 text-sm max-w-sm mt-2 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: project.description.replace(/\*\*(.*?)\*\*/g, '<span class="font-medium text-sky-300">$1</span>')
                  }} children={undefined}                />
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover/card:scale-105 transition-transform duration-500"
                    />
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
                  >
                    View Project →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    ...
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;