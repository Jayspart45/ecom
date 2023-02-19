import React from "react";
import img1 from "../images/img1.jpeg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
export default function Slider() {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              alt="First Slide"
            />
            <div className="carousel-caption">
              <h5>First Slide Heading</h5>
              <p>First Slide Caption</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="Second Slide"
            />
            <div className="carousel-caption">
              <h5>Second Slide Heading</h5>
              <p>Second Slide Caption</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="Third Slide"
            />
            <div className="carousel-caption">
              <h5>Third Slide Heading</h5>
              <p>Third Slide Caption</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
