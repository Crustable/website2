import { Article } from "@/types";

export const articles: Article[] = [
  {
    id: 1,
    title: "Getting Started with TypeScript",
    slug: "getting-started-with-typescript",
    excerpt: "Learn the basics of TypeScript",
    sections: [
      {
        id: "intro",
        title: "Introduction",
        content: "TypeScript is a powerful superset of JavaScript that adds static typing to the language...",
        order: 1
      },
      {
        id: "setup",
        title: "Setting Up TypeScript",
        content: "To get started with TypeScript, you'll need to install it via npm and configure your development environment...",
        order: 2
      },
      {
        id: "basics",
        title: "TypeScript Basics",
        content: "Let's explore the fundamental concepts of TypeScript including types, interfaces, and generics...",
        order: 3
      }
    ],
    category: { id: 1, name: "Programming", slug: "programming" },
    tags: ["typescript", "javascript", "programming"],
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01")
  },
  {
    id: 2,
    title: "React Best Practices",
    slug: "react-best-practices",
    excerpt: "Essential React patterns and practices",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "Learn how to write better React applications by following established patterns and best practices...",
        order: 1
      },
      {
        id: "component-structure",
        title: "Component Structure",
        content: "Properly structuring your React components is crucial for maintainability and reusability...",
        order: 2
      },
      {
        id: "state-management",
        title: "State Management",
        content: "Effective state management is key to building scalable React applications...",
        order: 3
      }
    ],
    category: { id: 1, name: "Programming", slug: "programming" },
    tags: ["react", "javascript", "frontend"],
    createdAt: new Date("2023-01-02"),
    updatedAt: new Date("2023-01-02")
  }
];