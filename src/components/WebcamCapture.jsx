import Webcam from "react-webcam";

function WebcamCapture() {
  const videoOption = {
    width: 720,
    height: 480,
    facingMode: "environment",
  };
  return (
    <>
      <Webcam id="videosource" audio={false} videoConstraints={videoOption} />
    </>
  );
}

export default WebcamCapture;
