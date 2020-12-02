import React, { useState } from "react";
import { AlignLeftOutlined, AlignRightOutlined } from "@ant-design/icons";
const Mobile = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(false);
  const toggle = () => {
    setCollapsed(!isCollapsed);
    setActive(!active);
  };
  return (
    <div>
      <ul className={`active${active}`}>
        <li style={{ fontSize: 20, fontWeight: 400, color: "silver" }}>
          INTERIOR DESIGN
        </li>
        <li>ABOUT</li>
        <li>PORTFOLIO</li>
        <li>TESTIMONIALS</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
      <div className="trigger-div">
        {React.createElement(
        isCollapsed ? AlignLeftOutlined : AlignRightOutlined,
        {
          className: "trigger",
          onClick: toggle,
        }
      )}
      </div>
     
    </div>
  );
};
export default Mobile;
