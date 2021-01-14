import React from "react";
import "./VideoFooter.css";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import Ticker from "react-ticker";

function VideoFooter({ title, shortDescription, keyPoint }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{title}</h3>
        <p>{shortDescription}</p>
        <div className="videoFooter__iconTicker">
          <MusicNoteRoundedIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{keyPoint}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__disk"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
