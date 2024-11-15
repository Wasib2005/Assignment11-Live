import { useContext } from "react";
import { RotatingSquare } from "react-loader-spinner";
import { LoadingContext } from "../Contexts/LoadingContext";

const Loading = () => {
  const { isLoading, error } = useContext(LoadingContext);

  if (error) {
    return <p>Something Went Wrong</p>;
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-249px-76px)]">
        <div className="text-center">
          <RotatingSquare
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="rotating-square-loading"
          />
        </div>
      </div>
    );
  }
};

export default Loading;
