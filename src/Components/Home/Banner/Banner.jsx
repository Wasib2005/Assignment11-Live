import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";

const Banner = ({ data }) => {
  console.log(data.image["16:9"] || data.image["1:1"]);
  return (
    <div>
      <div className="relative w-[400px] md:w-[780px] lg:w-[1280px] m-auto rounded-xl">
        <div className="absolute h-[calc400px*9/16)] md:h-[calc(700px*9/16)] lg:h-[calc(1280px*9/16)] w-full p-10 z-20 top-0 left-0 text-white flex flex-col justify-center pl-[10%] gap-2">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">
            {data.name}
          </h1>
          <p className=" text-sm md:text-xl lg:text-2xl w-4/5 md:w-3/4">
            {data.description.slice(0,70)}...
          </p>
          <div className="md:flex gap-3 hidden">
            <p className="flex items-center gap-1">
              <FaStar />
              <span>{data.rating}</span>
            </p>
            <p className="flex items-center gap-1">
              <LuAlarmClock />
              <span>{data.cookingTime}</span>
            </p>
          </div>
          <button
            className="text-sm md:text-base relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group w-[45%] md:w-1/4 lg:w-1/6"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-500 group-hover:h-full" />
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Visit Details
            </span>
          </button>
        </div>
        <div className="absolute h-[calc(400px*9/16)] md:h-[calc(700px*9/16)] lg:h-[calc(1280px*9/16)] w-full bg-black z-10 opacity-65 top-0 left-0 rounded-xl" />
        <img
          src={`${data.image["16:9"] || data.image["1:1"]}`}
          alt=""
          className=" h-[calc(400px*9/16)] md:h-[calc(700px*9/16)] lg:h-[calc(1280px*9/16)] w-full rounded-xl"
        />
      </div>
    </div>
  );
};

Banner.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Banner;
