import { Link, useParams } from "react-router-dom";
import useDataFetching from "../Hooks/useDataFetching";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";

const FoodDetails = () => {
  const { foodId } = useParams();
  console.log(foodId);
  const food = useDataFetching(`foodData?id=${foodId}`)?.data;
  console.log(food);
  return (
    <div className="p-4 text- mt-10 grid gap-4">
      <h1 className="text-3xl font-bold text-center">{food?.name}</h1>

      <img src={food?.image["16:9"]} alt={food?.name} className=" mt-10 " />
      <hr />
      <h1> Category: {food?.category}</h1>
      <hr />
      <p>{food?.description}</p>
      <hr />

      <div className="flex items-center gap-4 px-6">
        <p className="flex items-center gap-1">
          <FaMoneyBillWave />
          <span>{food?.price}</span>
        </p>
        <p className="flex items-center gap-1">
          <FaRegStarHalfStroke />
          <span>{food?.rating}</span>
        </p>
        <p className="flex items-center gap-1">
          <LuAlarmClock />
          <span>{food?.cookingTime} minutes</span>
        </p>
        <hr />
      </div>
      <hr />
      <div className="flex gap-4 px-4">
        <p>Ingredients : </p>
        <ul>
          {food?.ingredients.map((e, i) => (
            <li key={`ingredients${i}`}>{`${i + 1}. ${e}`}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="mt-2 gap-2 flex">
        <Link to={`/details/${food?._id}`}>
          <button className=" relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-green-500 border-2 border-green-500 rounded-xl hover:text-white group hover:bg-gray-50">
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

        <button
          // onClick={addToCartListHandle}
          className="relative px-5 py-1 overflow-hidden font-medium text-green-400 bg-green-100 border border-green-200 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-400 group-hover:w-full ease" />
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-400 group-hover:w-full ease" />
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-400 group-hover:h-full ease" />
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-400 group-hover:h-full ease" />
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 green-500 opacity-0 group-hover:opacity-100" />
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Add to card
          </span>
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
