import React from "react";

const Photo = (props) => {
  return <img src={props.path} alt={props.name} />;
};

export default Photo;
