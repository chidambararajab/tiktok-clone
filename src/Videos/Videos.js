import React, { useRef, useState } from "react";
import "./Videos.css";
import FileOne from "../Files/TikTok One.mp4";
// import FileTwo from "../Files/TikTok Two.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Videos({
  autoplay,
  newsURL,
  newsTitle,
  newsDescription,
  newsKeywords,
  newsSave,
  newsShare,
  newsRefresh,
}) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="videos">
      <video
        className="videos__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={FileOne}
      ></video>
      <VideoFooter
        title={newsTitle}
        shortDescription={newsDescription}
        keyPoint={newsKeywords}
      />
      <VideoSidebar saveButton={newsSave} />
    </div>
  );
}

export default Videos;
