import { Link, useParams } from "react-router-dom";
import useDataFetching from "../Hooks/useDataFetching";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import DeleteFromDB from "../Utilities/Common/DeleteFromDB";

const FoodDetails = () => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );
  const { foodId } = useParams();
  const food = useDataFetching(`foodData?id=${foodId}`)?.data;
  const { isUserOwner } = useContext(AuthContext);

  const addToCartListHandle = () => {
    const existingItem = cartList.find((item) => item?.id === food?._id);

    if (existingItem) {
      setCartList(
        cartList.map((item) =>
          item?.id === food?._id
            ? { ...item, quantity: item?.quantity + 1 }
            : item
        )
      );
    } else {
      setCartList([...cartList, { id: food?._id, quantity: 1 }]);
    }
    toast.success(`${food?.name} added`);
  };

  useEffect(() => {
    if (cartList.length !== 0) {
      localStorage.setItem("cartList", JSON.stringify(cartList));
    }
  }, [cartList]);

  if (!food) return;
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
          {food?.ingredients?.map((e, i) => (
            <li key={`ingredients${i}`}>{`${i + 1}. ${e}`}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="mt-2 gap-2 flex pl-10">
        {isUserOwner ? (
          <Link
            to={"/update"}
            className="relative px-5 py-3 overflow-hidden font-medium text-blue-600 bg-blue-100 border border-blue-200 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-400 group-hover:w-full ease" />
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 group-hover:w-full ease" />
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-400 group-hover:h-full ease" />
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-400 group-hover:h-full ease" />
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-500 opacity-0 group-hover:opacity-100" />
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Edit Details
            </span>
          </Link>
        ) : (
          <></>
        )}
        {!isUserOwner ? (
          <button
            onClick={addToCartListHandle}
            className="relative px-5 py-3 overflow-hidden font-medium text-green-400 bg-green-100 border border-green-200 rounded-lg shadow-inner group"
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
        ) : (
          <button
            onClick={() => DeleteFromDB(food?._id)}
            className="relative px-5 py-3 overflow-hidden font-medium text-red-600 bg-red-100 border border-red-300 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-red-600 group-hover:w-full ease" />
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-red-600 group-hover:w-full ease" />
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease" />
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease" />
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 green-500 opacity-0 group-hover:opacity-100" />
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Delete
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
