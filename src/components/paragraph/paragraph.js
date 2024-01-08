import React from "react";
import "../paragraph/style.css";

const Paragraph = ({ text, color }) => {
  return (
    <div className="wrapper" style={{color, textTransform:'uppercase'}}>
      <p>{text}</p>
    </div>
  );
};

Paragraph.defaultProps = {
  color: " #009E60",
};




export default Paragraph;
