const posts: Post[] = [
  {
    title: "My first post",
    description: "In this post I talk about my life and what I like to do.",
    href: "/posts/my-first-post",
    createdAt: new Date("2023-9-20"),
    id: 1
  },
  {
    title: "Título del post 2",
    description: "Descripción del post 2",
    href: "/posts/2",
    createdAt: new Date("2023-9-20"),
    id: 2
  },
  {
    title: "Título del post 3",
    description: "Descripción del post 3",
    href: "/posts/3",
    createdAt: new Date("2023-9-9"),
    id: 3
  },
];

export default posts;

type Post = {
  title: string;
  description: string;
  href: string;
  createdAt: Date;
  id: number;
};
