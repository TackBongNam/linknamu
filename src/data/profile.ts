export type Link = {
  id: string;
  title: string;
  url: string;
  icon: string;
};

export const profile = {
  name: "남택봉",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  image: "/profile.jpg",
};

export const links: Link[] = [
  {
    id: "github",
    title: "깃허브",
    url: "https://github.com/TackBongNam/",
    icon: "/icons/github.svg",
  },
  {
    id: "blog",
    title: "블로그",
    url: "https://blog.naver.com/ntb1004",
    icon: "/icons/naver-blog.svg",
  },
  {
    id: "email",
    title: "이메일",
    url: "mailto:tbnam84@gmail.com",
    icon: "/icons/gmail.svg",
  },
];
