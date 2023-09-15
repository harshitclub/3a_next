import React from "react";
import "./style.css";

function BlueButton({ link, text }: { link: string; text: string }) {
  return (
    <a href={link}>
      <button className="globalBtn">{text}</button>
    </a>
  );
}

export default BlueButton;
