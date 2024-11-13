import { useState, useEffect } from "react";
import { RotatingSquare } from "react-loader-spinner";

const Loading = ({ message }) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 4 ? prev + "." : "."));
    }, 500); // Change every 500ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <RotatingSquare
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="rotating-square-loading"
        />
        {message && <p>{message}{dots}</p>}
      </div>
    </div>
  );
};

export default Loading;
