import { users, type User, type InsertUser } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

import { Article } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  searchArticles(query: string): Promise<Article[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private articles: Article[];
  currentId: number;

  constructor() {
    this.users = new Map();
    this.articles = [
      {
        id: 1,
        title: "Getting Started with TypeScript",
        content: "TypeScript is a powerful superset of JavaScript...",
        excerpt: "Learn the basics of TypeScript",
        category: { id: 1, name: "Programming", slug: "programming" },
        tags: ["typescript", "javascript", "programming"],
        slug: "getting-started-with-typescript",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: "React Best Practices",
        content: "Learn how to write better React applications...",
        excerpt: "Essential React patterns and practices",
        category: { id: 1, name: "Programming", slug: "programming" },
        tags: ["react", "javascript", "frontend"],
        slug: "react-best-practices",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    this.currentId = 1;
  }

  async searchArticles(query: string): Promise<Article[]> {
    const lowercaseQuery = query.toLowerCase();
    return this.articles.filter(article => 
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery) ||
      (article.excerpt?.toLowerCase().includes(lowercaseQuery) || false) ||
      (article.category?.name.toLowerCase().includes(lowercaseQuery) || false) ||
      (article.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)) || false)
    );
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
