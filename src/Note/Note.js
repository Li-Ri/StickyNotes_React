import React from "react";
import "./Note.css";

const Note = (props) => {
  return (
    <div className="note-box">
      <div className="delete">
        <p onClick={props.delete}>x</p>
      </div>
      <div className="note-content">
        <h3>{props.title}</h3>
        <p>{props.note}</p>
      </div>
    </div>
  );
};

export default Note;
