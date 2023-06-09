import React from "react";
import "../styles/progress-bar.css";
import { useEffect } from "react";
import { useState } from "react";

const ProgressBar = ({ show }) => {
  const [timesUp, setTimesUp] = useState(false);

  useEffect(() => {
    if (show === false && timesUp === true) return;
    setTimesUp(false);

    const time = setTimeout(() => {
      setTimesUp(true);
    }, 300);

    return () => {
      clearTimeout(time);
    };
  }, [show]);

  return (
    <div
      className="progress-bar"
      style={{ display: show || !timesUp ? "" : "none" }}
    >
      <span></span>
    </div>
  );
};

export default ProgressBar;
