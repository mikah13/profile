export type Post = {
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  authorId: string | null;
  thumbnail: string | null;
};

