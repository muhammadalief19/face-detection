import { Button } from "@nextui-org/button";
import WebcamCapture from "../components/WebcamCapture";
import * as tf from "@tensorflow/tfjs";
import * as cocomodel from "@tensorflow-models/coco-ssd";
import { useEffect, useState } from "react";

function Home() {
  const [model, setModel] = useState("");
  const [detect, setDetect] = useState([]);
  const [isReady, setIsReady] = useState(false); // State untuk memastikan model siap

  // Load model once when the component is mounted
  useEffect(() => {
    tf.ready().then(async () => {
      try {
        const dataset = await cocomodel.load();
        setModel(dataset);
        setIsReady(true);
        console.log("Model is ready...");
      } catch (error) {
        console.log("Error loading model:", error);
      }
    });
  }, []);

  // Function to perform prediction
  const predict = async () => {
    if (!model) return; // Skip if the model is not loaded
    try {
      const detection = await model.detect(
        document.getElementById("videosource")
      );
      console.log(detection);
      setDetect(detection);
    } catch (error) {
      console.log("Error during prediction:", error);
    }
  };

  // Automatically call the predict function periodically
  useEffect(() => {
    if (isReady) {
      const interval = setInterval(() => {
        predict();
      }, 1000); // Set interval to 1 second

      return () => clearInterval(interval); // Clear interval when component unmounts
    }
  }, [isReady]); // Run only when the model is ready

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <p className="font-bold text-xl">Object Detection</p>
          <WebcamCapture />
          {detect && detect[0] ? (
            <span className="font-bold">Terdeteksi</span>
          ) : (
            <span className="italic text-red-700">Tidak terdeteksi</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
