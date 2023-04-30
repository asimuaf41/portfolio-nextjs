import React, { useState } from "react";
import "./about.scss";
import "./gallery.scss";
import { Image } from "antd";

const images = [
  {
    url: "./images/asim1.jpeg",
  },
  {
    url: "./images/asim11.jpg",
  },
  {
    url: "./images/asimg.jpeg",
  },
  {
    url: "./images/asim3.jpeg",
  },
  {
    url: "./profile.jpg",
  },
  {
    url: "./images/asim5.jpg",
  },
  {
    url: "./images/asim5.jpeg",
  },
  {
    url: "./images/asim7.jpg",
  },
  {
    url: "./images/asim8.jpg",
  },
  {
    url: "./images/asim9.jpg",
  },
  {
    url: "./images/asim10.jpg",
  },
  {
    url: "./images/asim2.jpeg",
  },
  {
    url: "./images/asim12.jpg",
  },
  {
    url: "./images/asim13.jpg",
  },
  {
    url: "./images/asim14.jpg",
  },
  {
    url: "./images/asim15.jpg",
  },
  {
    url: "./images/asim16.jpg",
  },
  {
    url: "./images/asim17.jpg",
  },
  {
    url: "./images/asim18.jpg",
  },
  {
    url: "./images/asim19.jpg",
  },
  {
    url: "./images/asim20.jpg",
  },
  {
    url: "./images/asim21.jpg",
  },
  {
    url: "./images/asim22.jpg",
  },
  {
    url: "./images/asim23.jpg",
  },

  {
    url: "./images/asim24.jpg",
  },
];

const images1 = [
  {
    url: "./asim1.jpeg",
  },
  {
    url: "./asim11.jpg",
  },
  {
    url: "./asimg.jpeg",
  },
  {
    url: "./asim3.jpeg",
  },
  {
    url: "./profile.jpg",
  },
  {
    url: "./asim5.jpg",
  },
  {
    url: "./asim5.jpeg",
  },
  {
    url: "./asim7.jpg",
  },
  {
    url: "./asim8.jpg",
  },
  {
    url: "./asim9.jpg",
  },
  {
    url: "./asim10.jpg",
  },
  {
    url: "./asim2.jpeg",
  },
  {
    url: "./asim12.jpg",
  },
  {
    url: "./asim13.jpg",
  },
  {
    url: "./asim14.jpg",
  },
  {
    url: "./asim15.jpg",
  },
  {
    url: "./asim16.jpg",
  },
  {
    url: "./asim17.jpg",
  },
  {
    url: "./asim18.jpg",
  },
  {
    url: "./asim19.jpg",
  },
  {
    url: "./asim20.jpg",
  },
  {
    url: "./asim21.jpg",
  },
  {
    url: "./asim22.jpg",
  },
  {
    url: "./asim23.jpg",
  },

  {
    url: "./asim24.jpg",
  },
];

export default function Gallery() {
  const [visible, setVisible] = useState(false);

  const handleFilterImages = () => {
    if (visible) {
      return images.slice(visible).concat(images.slice(0, visible));
    } else {
      return images;
    }
  };

  return (
    <div className="home-page">
      <div className="gallery-page">
        <div class="gallery-page-wrapper">
          {images1.map((item, index) => (
            <img onClick={() => setVisible(index)} key={index} src={item.url} alt="" />
          ))}

          <div style={{ display: "none" }}>
            <Image.PreviewGroup preview={{ visible: Boolean(visible), onVisibleChange: (vis) => setVisible(vis) }}>
              {handleFilterImages().map((item) => (
                <Image src={item.url} />
              ))}
            </Image.PreviewGroup>
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
