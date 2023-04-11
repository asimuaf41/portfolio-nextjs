import React from "react";
import "./about.scss";
import "./gallery.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
const images = [
  {
    original: "./asim1.jpeg",
    thumbnail: "./asim1.jpeg",
  },
  {
    original: "./asim2.jpeg",
    thumbnail: "./asim2.jpeg",
  },
  {
    original: "./asimg.jpeg",
    thumbnail: "./asimg.jpeg",
  },
  {
    original: "./asim3.jpeg",
    thumbnail: "./asim3.jpeg",
  },
  {
    original: "./asim4.jpeg",
    thumbnail: "./asim4.jpeg",
  },
  {
    original: "./asim5.jpeg",
    thumbnail: "./asim5.jpeg",
  },
];

export default function Gallery() {
  return (
    <div className="home-page">
      <div className="gallery-page">
        <ImageGallery items={images} />
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
