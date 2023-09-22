const posts: Post[] = [
  {
    title: "My first post",
    description: "In this post I talk about my life and what I like to do.",
    href: "/posts/my-first-post",
    createdAt: new Date("2023-9-20"),
    id: 1
  },
  {
    title: "My second post",
    description: "In this post I show yo my recent projects, and related topics.",
    href: "/posts/my-second-post",
    createdAt: new Date("2023-9-21"),
    id: 2
  },
  {
    title: "My third post",
    description: "In this post I will let you take a look of my workflow",
    href: "/posts/my-third-post",
    createdAt: new Date("2023-9-22"),
    id: 3
  }
];

export default posts;

type Post = {
  title: string;
  description: string;
  href: string;
  createdAt: Date;
  id: number;
};
