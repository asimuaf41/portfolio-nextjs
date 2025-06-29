import React, { useState } from "react";
import "./style.scss";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 9,
      title: "Carolina Real Estate site",
      description:
        "This real estate site allows users to search properties using advanced filters and view locations on an interactive map. Each listing includes complete details along with a built-in payment calculator.",
      technologies: [
        "Nextjs",
        "Tailwind CSS",
        "ShadCN-UI",
        "tanstack/react-query",
        "Google maps",
        "Zustand",
        "Zod",
        "React-hooks-form",
      ],
      image: "./carolinaSite.png",
      link: "https://github.com/asimuaf41",
      demo: "https://carolinav2.listing-details.com/",
    },
    {
      id: 6,
      title: "E-Signature Platform Inspired by DocuSign",
      description:
        "This platform functions as a comprehensive document management system. Users can upload PDF documents, add interactive fields such as signature, date, and name, and send them as envelopes to recipients for digital signing. Recipients can easily open the envelope, sign the document, and submit it securely.",
      technologies: [
        "NextJS",
        "ShadCN-UI",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "NExt Auth",
        "React-hooks-form",
        "Zod",
      ],
      image: "./e-sign.png",
      link: "https://github.com/asimuaf41",
      demo: "https://e-sign-front.ourmethod.com/",
    },
    {
      id: 1,
      title: "Method Admin Dashboard",
      description:
        "This real estate admin dashboard offers all-in-one management with data charts, real-time chat (WebSockets), document handling, user and agent workflows, and detailed reports.",
      technologies: [
        "React",
        "JSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "SCSS",
        "MUI Design",
      ],
      image: "./adminPanel2.png",
      link: "https://github.com/asimuaf41",
      demo: "https://app.ourmethod.com/main/dashboard",
    },
    {
      id: 2,
      title: "Method Atlanta",
      description:
        "This real estate site allows users to search properties using advanced filters and view locations on an interactive map. Each listing includes complete details along with a built-in payment calculator.",
      technologies: ["Nextjs", "NodeJs", "Material UI", "Google maps", "css"],
      image: "./methodAtlanta.png",
      link: "https://github.com/asimuaf41",
      demo: "https://methodatlanta.com/",
    },

    {
      id: 3,
      title: "Tun Admin Dashboard",
      description:
        "This is the TUN University Network Dashboard designed to manage all social features of the platform. It handles university posts, likes, shares, comments, and group management—centralizing all user interaction data in one place.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "SCSS",
        "axios",
        "css",
        "Ant Design",
      ],
      image: "./tunAdmin.png",
      link: "https://github.com/asimuaf41",
      demo: "https://tunadmin-158a6.web.app/login",
    },
    {
      id: 4,
      title: "Tun University Network",
      description:
        "This platform supports student social and academic activities with features like notes, lectures, attendance, real-time chat, posts, groups, and event sharing—making learning more interactive and connected.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "SCSS",
        "axios",
        "css",
        "Ant Design",
      ],
      image: "./tunSite.png",
      link: "https://github.com/asimuaf41",
      demo: "https://www.tun.com/app/",
    },
    {
      id: 5,
      title: "Legal Emirates – Top Lawyers and Law Firms in Dubai",
      description:
        "Legal Emirates is a premier legal platform designed to connect users with the best lawyers and law firms in Dubai. With over 27 years of trusted legal service, Bader Hamad Al Zaabi has established Legal Emirates as one of the UAE’s leading law firms, known for its integrity, expertise, and client-first approach.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "SCSS",
        "axios",
        "css",
        "Ant Design",
      ],
      image: "./LawFirm.png",
      link: "https://github.com/asimuaf41",
      demo: "https://legalemirates.com/",
    },

    {
      id: 10,
      title: "Mortgage, Refinance & DTI Calculator",
      description:
        "Estimate your mortgage payment with taxes, insurance, and HOA. Just enter the price of the home, your down payment, and loan details to calculate your estimated payments and schedule!. See if you should refinance your mortgage. Enter the details of your current home loan along with details of a new loan to estimate your savings and see if refinancing is right for you!. The Debt-to-Income Calculator can help you determine if you are likely eligible for a mortgage. Simply enter your annual income along with your monthly payments to calculate your debt-to-income ratio ",
      technologies: ["Nextjs", "NodeJs", "Material UI", "css"],
      image: "./agentMortageCalculator.png",
      link: "https://github.com/asimuaf41",
      demo: "https://align.ourmethod.com/gloria",
    },
    {
      id: 7,
      title: "Software Company Website",
      description:
        "Developed a dynamic website for a software company showcasing its projects, team members, services, and latest updates. The platform features a clean, responsive UI with sections for employee profiles, project highlights, company news, and more—providing a professional online presence to engage clients and stakeholders.",
      technologies: ["HTML", "CSS", "Javascript", "J query", "Bootstrap"],
      image: "./btSoft.png",
      link: "https://github.com/asimuaf41",
      demo: "https://btsoftwarehouse.com/",
    },
  ];

  const handleMouseEnter = (id) => {
    setActiveProject(id);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };
  return (
    <div className="home-page" style={{ height: "100%" }}>
      <div className="projects-page">
        {" "}
        <div className="main-heading">
          <h1>Recent Completed Projects</h1>
          <div className="main-heading-border">
            <div className="main-heading-border-sub"></div>
          </div>
        </div>
        <section className="projects-section" id="projects">
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card ${
                  activeProject === project.id ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-link"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="code-link"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <texture class="purple"></texture>
      <texture class="medium-blue"></texture>
      <texture class="light-blue"></texture>
      <texture class="red"></texture>
      <texture class="orange"></texture>
      <texture class="yellow"></texture>
      <texture class="cyan"></texture>
      <texture class="light-green"></texture>
      <texture class="lime"></texture>
      <texture class="magenta"></texture>
      <texture class="lightish-red"></texture>
      <texture class="pink"></texture>
    </div>
  );
}
