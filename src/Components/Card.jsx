import PropTypes, { bool } from "prop-types";
import { useEffect, useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ food, isRow = true, cartList, setCartList }) => {
  const addToCartListHandle = () => {
    const existingItem = cartList.find((item) => item.id === food._id);

    if (existingItem) {

      setCartList(
        cartList.map((item) =>
          item.id === food._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {

      setCartList([...cartList, { id: food._id, quantity: 1 }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  console.log(cartList);

  return (
    <div
      className={`border p-6 rounded-xl bg-slate-50 dark:bg-gray-800  gap-2 transition delay-100 duration-700 hover:scale-105 grid ${
        isRow ? " lg:grid " : " lg:flex "
      }`}
    >
      <div>
        <img
          src={food?.image["16:9"]}
          alt={food?.name}
          className="border rounded-xl md:w-[393.333px] md:h-[262.217px]"
        />
      </div>
      <div className="grid pl-4 gap-2">
        <h1 className="font-bold text-3xl">{food?.name}</h1>
        <hr />
        <div className="flex gap-2 items-center">
          <MdCategory />
          <p>Category: {food?.category}</p>
        </div>
        <hr />
        <p>{food?.description}</p>
        <hr />
        <div className="flex items-center gap-4">
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
        <div className="mt-2 gap-2 flex">
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
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  food: PropTypes.object.isRequired,
  isRow: PropTypes.bool,
  cartList: PropTypes.array,
  setCartList: PropTypes.func,
};

export default Card;
