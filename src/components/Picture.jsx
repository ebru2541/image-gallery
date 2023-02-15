import React from "react";

const Picture = ({ photo, large }) => {
  return (
    <div className="card">
      <img src={large} alt="" />
      <p>{photo}</p>
    </div>
  );
};

export default Picture;
