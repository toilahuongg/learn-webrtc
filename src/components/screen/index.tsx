import { useRef } from "react";

interface Navigator {
  getUserMedia(
      options: { video?: boolean; audio?: boolean; }, 
      success: (stream: any) => void, 
      error?: (error: string) => void
      ) : void;
}

const Screen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handle
  const handleOpenCamera = () => {
    const getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    if (getUserMedia) {
      navigator.getUserMedia = getUserMedia;
      navigator.getUserMedia(
        { audio: true, video: true },
        (stream) => {
          if (videoRef.current) videoRef.current.srcObject = stream;
        },
        function (err) { console.error(err)},
      );
    } else {
      alert("Error. WebRTC is not supported!");
    }
  };
  return (
    <div className="screen">
      <video ref={videoRef} autoPlay></video>
      <button onClick={handleOpenCamera}>Turn on camera</button>
    </div>
  );
};

export default Screen;
