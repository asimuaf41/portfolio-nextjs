import React from "react";
import "./about.scss";
import { AboutOutlined, SettingFilled, SmileOutlined, SyncOutlined, LoadingOutlined, LinkedinFilled } from "@ant-design/icons";
import { createFromIconfontCN, MobileOutlined, SafetyOutlined, FileDoneOutlined, FundProjectionScreenOutlined } from "@ant-design/icons";

const startExperienceDateReactJs = new Date("2017-09-25");
const startExperienceYeaReact = startExperienceDateReactJs.getFullYear();
const startExperienceDateNode = new Date("2020-09-25");
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
                <img draggable={false} style={{ width: "100%" }} src="./asimg.png" />
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
                  I am experianced MERN stack technology software engineer. I have {currentYear - startExperienceYeaReact} years experience in ReactJS
                  and {currentYear - startExperienceYeaNode} years experience in NodeJS. I have completed many projects in this technology separately
                  and also with the teams. I also have basic experience in React Native for Mobile application development.
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
            <div class="col-12 col-md-4 col-lg-4" style={{ margin: "10px 0px" }}>
              <div className="services-area-item">
                <div className="icon-top">
                  <FundProjectionScreenOutlined />
                </div>
                <div className="Servcie-item-heading">Web Development</div>
                <div className="Servcie-item-heading-border"></div>
                <div className="Servcie-item-content">
                  I am Experienced web developer with the techonlogy of ReactJS and NodeJs. I am single page application developer with ReactJs.
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-4" style={{ margin: "10px 0px" }}>
              <div className="services-area-item">
                <div className="icon-top">
                  <MobileOutlined />
                </div>
                <div className="Servcie-item-heading">Mobile Application</div>
                <div className="Servcie-item-heading-border"></div>
                <div className="Servcie-item-content">
                  I have basci level experience in mobile application development in React Native. I have completed few projects in React Native.
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-4" style={{ margin: "10px 0px" }}>
              <div className="services-area-item">
                <div className="icon-top">
                  <FileDoneOutlined />
                </div>
                <div className="Servcie-item-heading">SQA Engineer</div>
                <div className="Servcie-item-heading-border"></div>
                <div className="Servcie-item-content">
                  I monitor, analyze and test software during development in order to ensure quality. I architecting new automated test strategies and
                  frameworks.
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
