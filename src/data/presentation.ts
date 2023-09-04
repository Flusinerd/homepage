type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "jankrueger1999@gmail.com",
  title: "Hi, I'm Jan 👋",
  // profile: "/profile.webp",
  description:
    "Hallo, I'm Jan a *german full-stack developer* with over *5 years of experience*. I'm currently working with *Angular, NextJS, NestJS and Astro*. Outside of work I love to *play volleyball and make music*.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/jan_krue",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jan-k-604ba612b/",
    },
    {
      label: "Github",
      link: "https://github.com/Flusinerd",
    },
  ],
};

export default presentation;
