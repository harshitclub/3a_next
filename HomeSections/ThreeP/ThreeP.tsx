import React from "react";
import "./style.css";
import { DiCodeBadge } from "react-icons/di";
import { HiUserGroup } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

function ThreeP() {
  return (
    <section className="threePs width-100 flex align-items-center justify-content-center">
      <div className="threePsContainer flex align-items-start space-btw width-95">
        <div className="threeP">
          <h3>
            Product <DiCodeBadge className="threePIcons" />
          </h3>
          <div className="threePhr"></div>
          <div className="threePhr2"></div>
          <p>Crafting Innovation, Shaping Success</p>
          <ul>
            <li>Data Science</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>React.js</li>
            <li>Angular.js</li>
            <li>Node.js</li>
            <li>Cloud Computing</li>
            <li>Cyber Security</li>
            <li>DevOps</li>
            <li>and more</li>
          </ul>
        </div>
        <div className="threeP">
          <h3>
            People <HiUserGroup className="threePIcons" />
          </h3>
          <div className="threePhr"></div>
          <div className="threePhr2"></div>
          <p>Empowering Minds, Elevating Futures</p>
          <ul>
            <li>Leadership Development</li>
            <li>Effective Communication Skills</li>
            <li>Team Building and Collaboration</li>
            <li>Diversity and Inclusion Training</li>
            <li>Coaching and Mentoring Skills</li>
            <li>Managing Remote Teams</li>
            <li>Change Management</li>
            <li>Effective Presentation Skills</li>
            <li>Performance Management</li>
            <li>and more</li>
          </ul>
        </div>
        <div className="threeP">
          <h3>
            Process <AiFillSetting className="threePIcons rotate-icon" />
          </h3>
          <div className="threePhr"></div>
          <div className="threePhr2"></div>
          <p>Efficiency Redefined, Excellence Perfected</p>
          <ul>
            <li>Lean Six Sigma Green Belt</li>
            <li>Kaizen and Continuous Improvement</li>
            <li>Process Mapping and Improvement</li>
            <li>Business Process Management</li>
            <li>Supply Chain Management</li>
            <li>Project Management Essentials</li>
            <li>Quality Management Systems</li>
            <li>Statistical Process Control</li>
            <li>Lean Manufacturing</li>
            <li>and more</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ThreeP;
