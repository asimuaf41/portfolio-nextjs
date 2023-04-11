import React from "react";
import "./home.css";
import "./home.scss";
import { socialProfiles, textureClasses, personalInfo } from "../../db/home";
export default function Home() {
  return (
    <div className="home-page" style={{ height: "100vh" }}>
      <span>
        <h1>
          Hi, I am{" "}
          <span style={{ color: "#037fff" }}> {personalInfo.name}</span>
        </h1>
        <p>{personalInfo.detail}</p>
        <div className="social-media-list">
          <ul>
            {socialProfiles.map((item) => (
                <li>
                  <a href={item.link} target="_blank">
                    <i class={`fa fa-${item.icon}`}></i>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </span>
      {textureClasses.map((item) =>(<texture class={item}></texture>))}
    </div>
  );
}
