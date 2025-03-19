import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Article, Category } from "@/types";
import { articles } from "@/data/articles";
import { slugify } from "@/lib/utils";

interface CreateArticleFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  category: Category;
}

export default function CreateArticleForm({ open, setOpen, category }: CreateArticleFormProps) {
  const [, navigate] = useLocation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState("content");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, we would send data to the server
      // But for this demo, we'll simulate adding a new article
      const newSlug = slugify(title);
      
      // This is just for demo purposes - in a real app this would come from the server
      const newId = articles.length + 1;
      
      const newArticle: Article = {
        id: newId,
        title,
        slug: newSlug,
        content,
        excerpt: excerpt || content.substring(0, 150) + "...",
        category,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag !== ""),
      };

      // In a real app, we would add this to the database via an API call
      console.log("New article created:", newArticle);
      
      // Close the dialog and redirect to the new article
      setOpen(false);
      
      // Reset the form
      setTitle("");
      setContent("");
      setExcerpt("");
      setTags("");
      setFile(null);
      
      // Navigate to the category page
      // In a real application, we would navigate to the new article
      // after it's been saved to the database
      navigate(`/category/${category.slug}`);
      
      // Show success message
      alert("Article created successfully!");
    } catch (error) {
      console.error("Error creating article:", error);
      alert("There was an error creating the article. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New {category.name} Article</DialogTitle>
          <DialogDescription>
            Add a new article to the {category.name} category. Fill in the details below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
              <Input
                id="title"
                placeholder="Enter article title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="metadata">Metadata</TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="mt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="content">Article Content <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="content"
                      placeholder="Write your article content here..."
                      rows={10}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="file">Attach Files</Label>
                    <Input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                    />
                    {file && (
                      <p className="text-sm text-gray-500">Selected file: {file.name}</p>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="metadata" className="mt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      placeholder="A short summary of the article (optional, will be generated from content if left empty)"
                      rows={3}
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      placeholder="Enter tags separated by commas (e.g. setup, troubleshooting, guide)"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Article"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}