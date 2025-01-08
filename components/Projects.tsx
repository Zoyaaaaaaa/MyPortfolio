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
        "A Video Insight Generator that extracts key insights from videos using NLP, including Summarization/Q&A and Transcript Search for navigating YouTube video content.",
      link: "https://github.com/Zoyaaaaaaa/VidVoyager",
      image: "/images/vidvoyger.jpg",
    },
    {
      title: "Odyssey Quest",
      description:
        "A travel website with seamless Mapbox integration. Features user authentication, reviews system, enhanced location-based features, and more.",
      link: "https://odyssey-quest.onrender.com/listings",
      image: "/images/OdysseyQuest.jpg",
    },
    {
      title: "UniFete",
      description:
        "Comprehensive event coordination platform for educational institutions, with approval processes, event scheduling, and campus-wide student engagement.",
      link: "https://www.youtube.com/watch?v=LXQkMhHjCoQ",
      image: "/images/UniFete.jpg",
    },
    {
      title: "IntelliGraph",
      description:
        "A Data Analysis Tool built with Streamlit, featuring PandasAI & Plotly integration for interactive exploration and statistical insights.",
      link: "https://github.com/Zoyaaaaaaa/IntelliGraph",
      image: "/images/igraph.png",
    },
    {
      title: "Deal Detective",
      description:
        "Provides real-time data insights for smarter shopping and product management, offering real-time updates and detailed product analysis.",
      link: "https://deal-detective-tan.vercel.app/",
      image: "/images/DealDetective.png",
    },
    {
      title: "Editify",
      description:
        "An image editing platform offering features like grayscale conversion, edge detection, resizing, and blurring, powered by OpenCV and Flask.",
      link: "https://github.com/Zoyaaaaaaa/Editify",
      image: "/images/editify.png",
    },
    {
      title: "Talk to Website",
      description:
        "An AI-powered assistant to extract information from any website via natural language conversations, with semantic search and intelligent Q&A.",
      link: "https://github.com/Zoyaaaaaaa/TalkToWebsite",
      image: "/images/talktowebsite.jpg",
    },
    {
      title: "AI Strategy & Use Case Research Agent",
      description:
        "A Streamlit app using OpenAI APIs to deliver industry insights, curated AI solutions, and resource discovery.",
      link: "https://github.com/Zoyaaaaaaa/Market-Research-AI-Agents",
      image: "/images/MarketResearch.png",
    },
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
                >
                  {project.description}
                </CardItem>
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
