import { useEffect, useState } from "react";
import { CustomButton } from "./Header";
import CancelIcon from "../assets/cancel.png";
import { useNavigate } from "react-router-dom";

const ProgressBar = ({
  segments,
  progress,
  seconds,
  minutes,
}: {
  segments: number;
  progress: number;
  seconds: number;
  minutes: number;
}) => {
  const navigate = useNavigate();
  return (
    <div className="h-[400px] w-[400px] relative flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 translate-x-[calc(-50%-7.5px)] translate-y-1/2 origin-center -rotate-90">
        {[...Array(segments).keys()].map((num) => {
          const angle = (num / 100) * 360;
          const angleInRadians = angle * (Math.PI / 180);

          return (
            <div
              className="absolute w-[3px] h-[15px] bg-white"
              style={{
                top: `${200 * Math.sin(angleInRadians)}px`, // Use radians here
                left: `${200 * Math.cos(angleInRadians)}px`,
                transformOrigin: "center",
                transform: `rotate(${angle + 90}deg)`,
                backgroundColor: num <= progress ? "white" : "#444444",
              }}
            ></div>
          );
        })}
      </div>
      <div className="grid gap-y-2 justify-items-center">
        <div className="text-6xl font-bold">
          {minutes}:{seconds <= 10 ? `0${seconds}` : seconds}
        </div>
        <div className="text-lg">Running analysis</div>
        <div className="text-lg">Last name • MRN • DOB</div>
        <CustomButton onClick={() => navigate("/")} icon={CancelIcon}>
          Cancel
        </CustomButton>
      </div>
    </div>
  );
};

const Timer = () => {
  const totalTime = 10 * 60;
  const [time, setTime] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const totalSegments = 100;
  const segmentProgress = ((totalTime - time) / totalTime) * totalSegments;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-[#121212] flex items-center justify-center">
      <ProgressBar
        segments={100}
        progress={segmentProgress}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};
export default Timer;
