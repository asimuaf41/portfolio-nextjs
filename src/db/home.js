let startExperienceDateReactJs=new Date("2017-09-25")
let startExperienceYeaReact=startExperienceDateReactJs.getFullYear();
let startExperienceDateNode=new Date("2020-09-25")
let startExperienceYeaNode=startExperienceDateNode.getFullYear();

let currentYear=(new Date()).getFullYear()


export const personalInfo={
    name:" Asim Ali",
    detail:`I am experienced MERN stack technology software engineer. I have ${currentYear-startExperienceYeaReact}  years experience in ReactJS and ${currentYear-startExperienceYeaNode} years experience in NodeJS. I have completed many projects in this technology separately and also with the teams.`
}
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
      link: "https://github.com/kashiffff",
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