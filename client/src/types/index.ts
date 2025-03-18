export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface Author {
  id: number;
  name: string;
  title: string;
  avatar?: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: Category;
  coverImage?: string;
  author?: Author;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  tags?: string[];
  viewCount?: number;
}
