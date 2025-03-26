import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get('/api/search', async (req, res) => {
    try {
      const query = req.query.q?.toString().toLowerCase();
      if (!query) {
        return res.json([]);
      }

      const searchResults = await storage.searchArticles(query);
      res.json(searchResults);
    } catch (error) {
      console.error('Search error:', error);
      res.status(500).json({ message: 'Search failed' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
