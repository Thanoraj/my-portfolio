export type route = {
  name: string;
  hash: string;
};

export const routes = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const introData = {
  p1: "Hi, I'm Thanoraj!",
  p2: "I'm a passionate ",
  p3: "AI & Full stack Engineer ",
  p4: "with ",
  p5: "3 years ",
  p6: "of experience in development. I thrive on crafting intuitive and engaging user experiences and building scalable, high-performing applications. With a strong foundation in ",
  p7: "React, Next.js, Flutter and Python.",
};
