import React from "react";
import PropTypes from "prop-types";

const Banner = ({ data }) => {
  console.log(data.image["16:9"] || data.image["1:1"]);
  return (
    <div>
      <div className="relative">
        <div className="absolute h-[calc(1280px*9/16)] w-[1280px] p-10 z-20 top-0 left-0 text-white">
          <h1 className="font-bold text-6xl">{data.name}</h1>
        </div>
        <div className="absolute md:h-[calc(750px*9/16)] md:w-[750px] lg:h-[calc(1280px*9/16)] lg:w-[1280px] bg-black z-10 opacity-65 top-0 left-0" />
        <img
          src={`${data.image["16:9"] || data.image["1:1"]}`}
          alt=""
          className="h-[calc(1280px*9/16)] w-full"
        />
      </div>
    </div>
  );
};

Banner.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Banner;
