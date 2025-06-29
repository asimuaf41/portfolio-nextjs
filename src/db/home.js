let startExperienceDateReactJs = new Date("2019-09-25");
let startExperienceYeaReact = startExperienceDateReactJs.getFullYear();
let startExperienceDateNode = new Date("2021-09-25");
let startExperienceYeaNode = startExperienceDateNode.getFullYear();

let currentYear = new Date().getFullYear();

export const personalInfo = {
  name: " Asim Ali",
  detail: `
  I’m a seasoned Full-Stack JavaScript Engineer with ${
    currentYear - startExperienceYeaReact
  }+ years of experience in React.js and ${
    currentYear - startExperienceYeaNode
  } years in Node.js, specializing in Next.js for fast, scalable, SEO-friendly web applications. I have recently expanded to NestJS for robust backend architectures, delivering clean, maintainable code and high-performance user experiences. I’ve successfully led and contributed to diverse projects, both independently and within agile teams.
  `,
};
export const socialProfiles = [
  {
    link: "https://www.facebook.com/profile.php?id=100009574883424",
    icon: "facebook",
  },
  {
    link: "https://twitter.com/MianAsimAli6",
    icon: "twitter",
  },
  {
    link: "https://www.linkedin.com/in/asim-ali-ali-857a4113b/",
    icon: "linkedin",
  },
  {
    link: "https://github.com/asimuaf41",
    icon: "github",
  },
];
export const textureClasses = [
  "purple",
  "medium-blue",
  "light-blue",
  "red",
  "orange",
  "yellow",
  "cyan",
  "light-green",
  "lime",
  "magenta",
  "lightish-red",
  "pink",
];
