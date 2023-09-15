import React from "react";
import "./style.css";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { BiChevronDown } from "react-icons/bi";
import BlueButton from "@/Components/BlueButton/BlueButton";

const company = process.env.comapny;

function Navbar() {
  return (
    <header className="flex align-items-center justify-content-center width-100">
      <nav className="flex space-btw width-95">
        <div className="mainMenu flex">
          <Image src={Logo} alt={`${company} Logo`} className="navLogo" />

          <div className="menu flex align-items-center justify-content-center">
            <ul className="flex">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                TRAINING <BiChevronDown className="icon-setter-1" />
              </li>
              <li>
                <a href="/e-learning">E-LEARNING</a>
              </li>
              <li>
                <a href="/corporate">CORPORATE</a>
              </li>
              <li>
                <a href="/calendar">CALENDAR</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navContact flex align-items-center justify-content-center">
          <BlueButton link="/contact" text="CONTACT" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
