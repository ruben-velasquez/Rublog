const posts: Post[] = [
  {
    title: "Título del post 1",
    description: "Descripción del post 1",
    href: "/posts/1",
    createdAt: new Date("2022-9-20"),
  },
  {
    title: "Título del post 2",
    description: "Descripción del post 2",
    href: "/posts/2",
    createdAt: new Date("2022-9-20"),
  },
  {
    title: "Título del post 3",
    description: "Descripción del post 3",
    href: "/posts/3",
    createdAt: new Date("2023-9-9"),
  },
];

export default posts;

type Post = {
  title: string;
  description: string;
  href: string;
  createdAt: Date;
};
