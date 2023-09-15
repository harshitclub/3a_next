import React from "react";
import "./style.css";
import Divider from "@/Components/Divider/Divider";
import SmallDivider from "@/Components/SmallDivider/SmallDivider";
import BlueButton from "@/Components/BlueButton/BlueButton";

function AboutSection() {
  return (
    <section className="aboutSection flex align-items-center justify-content-center flex-direction-column width-100">
      <div className="aboutContainer flex align-items-center space-btw width-95">
        <div className="aboutSLeft width-50">
          <h2>About Our Organization</h2>
          <Divider />
          <p>
            3a Learning solutions India Pvt. Limited (ISO 9001:2015 Certified)
            was founded in August 2014.
          </p>
          <p>
            We are the industry leader in technology and people management
            training and consultancy.
          </p>
          <p>
            We at 3a Learning assist organizations and individuals in competing
            and flourishing in this diverse and VUCA environment by using new
            age technology in a variety of ways to accelerate development.
          </p>
          <h3>We specialize in 3P’s</h3>
          <SmallDivider />
          <p className="styleP">
            Product- People- Process Oriented Training & Consulting Services
          </p>
          {/* <BlueButton link="/" text="Download Brochure" /> */}
        </div>
        <div className="aboutSRight width-50"></div>
      </div>
    </section>
  );
}

export default AboutSection;
