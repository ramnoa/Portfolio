/**
 * Projects Data
 * Array of featured projects with descriptions, tech stack, and images.
 * Each project object is rendered as a card in the Portfolio section.
 */
 import cvImage from "../src/Assets/images/CV.png";
 import forexImage from "../src/Assets/images/Forex.png";
 export const projects = [
  {
    title: "3. Nano Traffic – AI-Powered Traffic Violation Detection System",
    description:
      "Developed a real-time computer vision system to detect traffic violations in restricted zones. Built end-to-end processing pipelines to identify motorcycles and bicycles, handling model training, dataset curation, inference, and evaluation workflows for automated traffic monitoring.",
    tags: ["Python", "YOLO", "Ultralytics", "Computer Vision", "Deep Learning"],
    image: cvImage,
  },
  {
    title: "2. TradeAI Engine (Active Collaboration)",
    description:
      "Collaborating on the development of an intelligent quantitative trading system. Engineering predictive machine learning models to analyze market trends, process historical financial datasets, and optimize algorithmic decision-making.",
    tags: [
      "Python",
      "Time-Series Analytics",
      "Machine Learning",
      "Data Pipelines",
    ],
    image: forexImage,
  },
];