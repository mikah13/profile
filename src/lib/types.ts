export type Post = {
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  authorId: string;
  thumbnail: string | null;
};

export type Category = {
  id: number;
  name: string;
  posts: Post[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  posts: Post[];
};
