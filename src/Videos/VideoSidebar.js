import React, { useState } from "react";
import "./VideoSidebar.css";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import FindReplaceRoundedIcon from "@material-ui/icons/FindReplaceRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";

function VideoSidebar({ refreshButton, saveButton, shareButton }) {
  const [save, setSave] = useState(false);
  /*
refreshButton - Use to refresh the news content.
saveButton - Used to show how many saves people did.
shareButton - Make the share on globally like Insta, whatsapp, others.
*/
  return (
    <div className="videoSidebar">
      {/* Can use fontSize="large" inside icon to get big icons */}
      <div className="videoSidebar__options">
        <FindReplaceRoundedIcon />
        <p>{}</p>
      </div>
      <div className="videoSidebar__options">
        {save ? (
          <BookmarkRoundedIcon onClick={(e) => setSave(false)} />
        ) : (
          <BookmarkBorderRoundedIcon onClick={(e) => setSave(true)} />
        )}
        <p>{saveButton}</p>
      </div>
      <div className="videoSidebar__options">
        <ShareRoundedIcon />
        <p>{}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
