import { Project } from "@/types/portfolio";

export const featuredProjects: Project[] = [
  {
    id: "voice-guard",
    slug: "voice-guard",
    title: "VOICE-GUARD",
    summary:
      "Synthetic speech and voice-cloning detection system that analyzes recorded audio for deepfake acoustic artifacts.",
    problem:
      "The rapid emergence of generative voice-cloning technology facilitates fraudulent voice synthesis and identity spoofing.",
    techStack: [
      "PyTorch",
      "AASIST",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    highlights: [
      "FastAPI backend integrating deep learning inference pipelines with the AASIST architecture for synthetic speech detection.",
      "Next.js interface supporting audio sample upload, recorded-clip processing, and detailed detection analysis breakdown.",
      "Relational database schema storing analysis records, audio metadata, and detection history.",
    ],
    githubUrl:
      "https://github.com/Kevinmatthew1011/sih26104-voice-cloning-detection",
    featured: true,
    status: "active",
  },
  {
    id: "errordiary",
    slug: "errordiary",
    title: "ErrorDiary",
    summary:
      "Developer debugging journal and error-logging tool to track, categorize, and document solutions for code exceptions.",
    problem:
      "Developers frequently encounter recurring runtime bugs across projects without a centralized, searchable record of resolved issues.",
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    highlights: [
      "Structured bug entry workflow capturing stack traces, error categories, reproduction steps, and documented solutions.",
      "Search and filter mechanism for quick retrieval of historical debugging notes and solutions.",
      "Relational schema modeling error classifications, severity levels, and project associations.",
    ],
    githubUrl: "https://github.com/Kevinmatthew1011/Error-Dairy",
    featured: false,
    status: "completed",
  },
  {
    id: "careertrack",
    slug: "careertrack",
    title: "CareerTrack",
    summary:
      "Full-stack application tracker for organizing internship submissions, technical interviews, and status updates.",
    problem:
      "Managing multiple job and internship applications across fragmented platforms leads to missed follow-ups and unorganized interview preparation.",
    techStack: [
      "TypeScript",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    highlights: [
      "End-to-end dashboard organizing recruitment pipelines across application stages and status tracking.",
      "FastAPI backend with SQLAlchemy ORM handling structured CRUD operations for job entries and application notes.",
      "Responsive interface with status badges, deadline sorting, and timeline tracking.",
    ],
    featured: false,
    status: "completed",
  },
  {
    id: "fintrace",
    slug: "fintrace",
    title: "FinTrace",
    summary:
      "Financial fraud network intelligence prototype for detecting suspicious transactions and supporting investigations.",
    problem:
      "Financial crime analysts need clearer ways to connect suspicious transactions, entities, alerts, and investigation evidence.",
    techStack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Docker",
    ],
    highlights: [
      "Prototype foundation for transaction ingestion, entity resolution, graph analysis, risk scoring, and case workflows.",
      "PostgreSQL and Prisma schema covering entities, transactions, alerts, and investigation cases.",
      "Modular Next.js architecture with validated environment configuration, API health checks, and containerized local services.",
    ],
    githubUrl: "https://github.com/Kevinmatthew1011/FinTrace",
    featured: false,
    status: "prototype",
  },
];
