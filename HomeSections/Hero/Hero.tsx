import React from "react";
import "./style.css";
import ContactForm from "@/Components/ContactForm/ContactForm";

function Hero() {
  return (
    <section className="hero width-100 flex align-items-center justify-content-center">
      <div className="heroContainer flex align-items-center space-btw width-95">
        <div className="heroLeft width-60">
          <h1>{process.env.company}</h1>
          <p className="heroDash">|</p>
          <h2>Align - Assimilate - Apply</h2>
          <p>
            Unleash success with our top-tier training and consulting services,
            tailored for today's competitive business world.
          </p>
        </div>
        <div className="heroRight width-40">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Hero;
