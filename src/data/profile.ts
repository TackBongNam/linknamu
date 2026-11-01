export type Link = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "남택봉",
  bio: "세계 최강 바이브코더",
  image: "/profile.svg",
};

export const links: Link[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
