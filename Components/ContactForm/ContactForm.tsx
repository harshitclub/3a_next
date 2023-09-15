import React from "react";
import "./style.css";
import {
  HiInformationCircle,
  HiMail,
  HiOfficeBuilding,
  HiPhone,
  HiUser,
} from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";

function ContactForm() {
  return (
    <form className="width-100 contactForm">
      <h2>Have Any Query?</h2>
      <div className="inputsDiv flex space-btw width-100">
        <div className="inputDiv flex width-49">
          <HiUser className="contactFormIcon" />
          <input placeholder="First Name" type="text" className="width-100" />
        </div>
        <div className="inputDiv flex width-49">
          <HiUser className="contactFormIcon" />
          <input placeholder="Last Name" type="text" className="width-100" />
        </div>
      </div>
      <div className="inputsDiv flex space-btw width-100">
        <div className="inputDiv flex width-49">
          <HiMail className="contactFormIcon" />
          <input placeholder="Email" type="mail" className="width-100" />
        </div>
        <div className="inputDiv flex width-49">
          <HiPhone className="contactFormIcon" />
          <input placeholder="Phone" type="number" className="width-100" />
        </div>
      </div>
      <div className="inputsDiv flex space-btw width-100">
        <div className="inputDiv flex width-49">
          <HiOfficeBuilding className="contactFormIcon" />
          <input placeholder="Company" type="text" className="width-100" />
        </div>
        <div className="inputDiv flex width-49">
          <HiInformationCircle className="contactFormIcon" />
          <input placeholder="Position" type="text" className="width-100" />
        </div>
      </div>
      <textarea rows="5" className="width-100" placeholder="Any Message" />
      <button>
        Send Message <RiSendPlaneFill className="formIcon" />
      </button>
    </form>
  );
}

export default ContactForm;
