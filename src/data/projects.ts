export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Activity Detection App",
    techs: ["React-native (Expo)", "Weka"],
    link: "https://github.com/Flusinerd/fitness-tracker",
  },
  {
    title: "Time Tracking Web App",
    techs: ["NextJS (T3)", "Prisma", "TRPC"],
    link: "https://github.com/Flusinerd/time-tracker-t3",
  },
  {
    title: "Portfolio",
    techs: ["Astro"],
    link: "/",
  },
];

export default projects;
