import React from "react";
import "./about.scss";
import {
  AboutOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  createFromIconfontCN,
  MobileOutlined,
  SafetyOutlined,
  FileDoneOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
export default function Contact() {
  return (
    <div className="home-page">
      <div className="about-page">
        <div className="main-heading">
          <h1>Contact</h1>
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
                  <PhoneOutlined />
                </div>
                <div className="Servcie-item-heading">Phone</div>
                <div className="Servcie-item-heading-border"></div>
                <div className="Servcie-item-content">
                  <a style={{ color: "#a4acc4" }} href="tel:+923026046119">
                    +92 302 6046119
                  </a>
                  <br />
                  <a style={{ color: "#a4acc4" }} href="tel:+923496006162">
                    +92 349 6006162
                  </a>
                  <br />
                  <a style={{ color: "#a4acc4" }} href="tel:0563866059">
                    056 3866059
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-4 col-lg-4"
              style={{ margin: "10px 0px" }}
            >
              <div className="services-area-item">
                <div className="icon-top">
                  <MailOutlined />
                </div>
                <div className="Servcie-item-heading">Email</div>
                <div className="Servcie-item-heading-border"></div>
                <div className="Servcie-item-content">
                  <a
                    style={{ color: "#a4acc4" }}
                    href="mailto:asimuaf41@gmail.com"
                  >
                    asimuaf41@gmail.com
                  </a>
                  <br />
                  <a
                    style={{ color: "#a4acc4" }}
                    href="mailto:asimsoftwaredeveloper@gmail.com"
                  >
                    asimsoftwaredeveloper@gmail.com
                  </a>
                  <br />

                  <a
                    style={{ color: "#a4acc4" }}
                    href="mailto:asimsoftwaredeveloper01@gmail.com"
                  >
                   asimsoftwaredeveloper01@gmail.com
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-4 col-lg-4"
              style={{ margin: "10px 0px" }}
            >
              <div className="services-area-item">
                <div className="icon-top">
                  <EnvironmentOutlined />
                </div>
                <div className="Servcie-item-heading">Address</div>
                <div className="Servcie-item-heading-border"></div>
                <div className="Servcie-item-content">
                  Marrar chak 41/R.B Tehsil: sangla Hill District Nankana sahib
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-contact-area">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d729936.4516613283!2d73.11367429737892!3d31.803112744720796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39220b72936edc15%3A0x42e2ed6919ade7e!2sAli%20Abdullah%20General%20store!5e0!3m2!1sen!2s!4v1612544292757!5m2!1sen!2s"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: "0", filter: "invert(90%)" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>{" "}
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
