import { useParams } from "react-router-dom";
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
      </div>
      <hr />
    </div>
  );
};

export default FoodDetails;
