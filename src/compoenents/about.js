import React from "react";
import "./about.scss";
import {
  createFromIconfontCN,
  MobileOutlined,
  FileDoneOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";

const startExperienceDateReactJs = new Date("2019-09-25");
const startExperienceYeaReact = startExperienceDateReactJs.getFullYear();
const startExperienceDateNode = new Date("2021-09-25");
const startExperienceYeaNode = startExperienceDateNode.getFullYear();
const currentYear = new Date().getFullYear();

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
export default function About() {
  return (
    <div className="home-page">
      <div className="about-page">
        <div className="main-heading">
          <h1>ABOUT ME</h1>
          <div className="main-heading-border">
            <div className="main-heading-border-sub"></div>
          </div>
        </div>
        <div className="about-image-and-detail">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-xl-5">
              <div className="me-image">
                {/*  <div className="my-card-badge">
                <img
                  draggable={false}
                  src="./card.png"
                />
                </div> */}
                <img
                  draggable={false}
                  style={{ width: "100%" }}
                  src="./asim-working.jpg"
                />
                {/* <div className="border-frame-top-left"></div>
                <div className="border-frame-bottom-left"></div>
                <div className="border-frame-bottom-right"></div>
                <div className="border-frame-top-right"></div> */}
              </div>
            </div>
            <div class="col-lg-6  col-md-12 col-xl-7">
              <div className="me-detail">
                <h1>
                  {" "}
                  I am <span style={{ color: "#037fff" }}> Asim Ali</span>
                </h1>
                <p>
                  {" "}
                  I’m an experienced Full-Stack JavaScript Engineer with{" "}
                  {currentYear - startExperienceYeaReact}+ years in React.js and{" "}
                  {currentYear - startExperienceYeaNode}+ years in Node.js,
                  specializing in building high-performance, scalable web
                  applications. I leverage Next.js for fast, SEO-friendly
                  frontends and NestJS (alongside Express & Fastify) for robust,
                  maintainable backends, using MongoDB and Prisma for structured
                  data management. For state management, I utilize Zustand and
                  Redux to build clean, scalable frontends with shadcn/ui and
                  Tailwind CSS for modern, accessible UI. I’ve delivered a wide
                  range of projects—dashboards, SaaS platforms, CRMs, and
                  real-time applications—both independently and within agile
                  teams, ensuring quality, maintainability, and user-focused
                  performance. Additionally, I have experience in React Native
                  for mobile development, enabling me to contribute to
                  full-stack and mobile-first solutions as needed.
                </p>
                <div className="me-detail-personal">
                  <div class="row">
                    <div class="col-4 col-lg-4">
                      <p>Full Name </p>
                    </div>
                    <div class="col-8 col-lg-8">
                      <p> : Asim Ali</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4 col-lg-4">
                      <p>S/O </p>
                    </div>
                    <div class="col-8 col-lg-8">
                      <p> : Muhammad Rafique</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4 col-lg-4">
                      <p>Age </p>
                    </div>
                    <div class="col-8 col-lg-8">
                      <p> : {new Date().getFullYear() - 1998} years old </p>
                    </div>
                  </div>
                  {/*  <div class="row">
                 <div class="col-4 col-lg-4">
                 <p>CNIC  </p>  
                </div>
                <div class="col-8 col-lg-8">
                <p> : 35503-0171845-7 </p>  
                </div>
                </div> */}
                  <div class="row">
                    <div class="col-4 col-lg-4">
                      <p>Nationality </p>
                    </div>
                    <div class="col-8 col-lg-8">
                      <p> : Pakistan </p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-4 col-lg-4">
                      <p>Languages </p>
                    </div>
                    <div class="col-8 col-lg-8">
                      <p> : English,Urdu and Punjabi </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4 col-lg-4">
                      <p>Address </p>
                    </div>
                    <div class="col-8 col-lg-8">
                      <p> : Shahkot, Pakistan </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-heading">
          <h1>Services</h1>
          <div className="main-heading-border">
            <div className="main-heading-border-sub"></div>
          </div>
        </div>
        <div className="services-area">
          <div class="row">
            <div
              class="col-12 col-md-4 col-lg-4"
              style={{ margin: "10px 0px" }}
            >
              <div className="services-area-item">
                <div className="icon-top">
                  <FundProjectionScreenOutlined />
                </div>
                <div className="Servcie-item-heading">Web Development</div>
                <div className="Servcie-item-heading-border"></div>
                <div className="Servcie-item-content">
                  I am an experienced web developer specializing in React.js and
                  Node.js. I build fast, scalable single-page applications
                  (SPAs) with React, and robust backend APIs using Node.js
                  (Express & Fastify), ensuring seamless performance and
                  maintainability.
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-4 col-lg-4"
              style={{ margin: "10px 0px" }}
            >
              <div className="services-area-item">
                <div className="icon-top">
                  <MobileOutlined />
                </div>
                <div className="Servcie-item-heading">Mobile Application</div>
                <div className="Servcie-item-heading-border"></div>
                <div className="Servcie-item-content">
                  have foundational experience in mobile app development using
                  React Native. I’ve successfully delivered several projects,
                  focusing on cross-platform solutions that provide smooth and
                  responsive user experiences.
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-4 col-lg-4"
              style={{ margin: "10px 0px" }}
            >
              <div className="services-area-item">
                <div className="icon-top">
                  <FileDoneOutlined />
                </div>
                <div className="Servcie-item-heading">QA Engineering</div>
                <div className="Servcie-item-heading-border"></div>
                <div className="Servcie-item-content">
                  I actively monitor, analyze, and test software during
                  development to ensure top-notch quality. I design and
                  implement automated testing strategies and frameworks,
                  improving reliability and reducing bugs for a seamless user
                  experience.
                </div>
              </div>
            </div>
          </div>
        </div>
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
