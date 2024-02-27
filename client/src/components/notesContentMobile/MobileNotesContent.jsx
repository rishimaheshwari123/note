import React from "react";
import "./MobileNotesContent.css";

function MobileNotesContent({ note }) {
  return (
    <div className="container">
      <div className="mobile__notes__content__body">
        <div className="mobile__notes__content__details">
          <p>{note.content}</p>
        </div>
        <div className="mobile__notes__content__date__time__details">
          <div></div>
          <div className="time">
            <div className="mobile__notes__content__date">{note.date}</div>
            <div className="mobile__notes__content__time">{note.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNotesContent;
