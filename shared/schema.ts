import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  sections: ArticleSection[];
  category: {
    id: number;
    name: string;
    slug: string;
  };
  author?: {
    id: number;
    name: string;
    title: string;
    avatar?: string;
  };
  tags?: string[];
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}