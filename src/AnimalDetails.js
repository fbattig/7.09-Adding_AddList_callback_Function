import React from "react";
const AnimalDetail = (props) => {
  const { id, name, number, endangered, donation } = props.detail;
  return (
    <li key={id}>
      <div>
        <p>{props.image}</p>
        <p>Animal: {name} </p>
        <p>Number: {number} </p>
        <p> Endangered: {endangered ? "Yes" : "No"}</p>
        <p style={{ color: props.donationColor }}>
          Donation Amount: ${donation}
        </p>
        <button onClick={() => props.removeList(id)}>Remove from List</button>
      </div>
    </li>
  );
};

export default AnimalDetail;
