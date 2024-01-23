import React from "react";

function Guest(props) {
  return (
    <div className="guest">
        <li>
            {props.guest.name} is contributing {props.guest.contribution} 
            <button onClick={() => props.handleDelete(props.guest)}>X</button>
        </li>
    </div>
  );
}

export default Guest;
