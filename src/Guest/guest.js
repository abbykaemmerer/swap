import React from "react";

function Guest(props) {
  return (
    <div className="guests">
        <li>
            {props.guest.name} is contributing {props.guest.contribution} 
            <button className="remove-guest-btn" onClick={() => props.handleDelete(props.guest)}>x</button>
        </li>
    </div>
  );
}

export default Guest;
