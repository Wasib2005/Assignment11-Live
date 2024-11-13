import PropTypes from "prop-types";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { Link } from "react-router-dom";

const Card = ({ food }) => {
  console.log(food);
  return (
    <div className="border p-6 rounded-xl bg-slate-50 dark:bg-gray-800 grid gap-2 transition delay-100 duration-700 hover:scale-105 ">
      <div>
        <img
          src={food.image["16:9"]}
          alt={food.name}
          className="border rounded-xl md:w-[393.333px] md:h-[262.217px]"
        />
      </div>
      <div className="grid pl-4 gap-2">
        <h1 className="font-bold text-3xl">{food.name}</h1>
        <hr />
        <p>{food.description}</p>
        <hr />
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1">
            <FaMoneyBillWave />
            <span>{food.price}</span>
          </p>
          <p className="flex items-center gap-1">
            <FaRegStarHalfStroke />
            <span>{food.rating}</span>
          </p>
          <p className="flex items-center gap-1">
            <LuAlarmClock />
            <span>{food.price}</span>
          </p>
        </div>
        <div className="mt-2">
          <Link>
            <button className=" relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-green-500 border-2 border-green-500 rounded-xl hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-green-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
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
              <span className="relative">Visit Details</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  food: PropTypes.object.isRequired,
};

export default Card;
