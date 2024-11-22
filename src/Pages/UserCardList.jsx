import { useContext, useEffect, useState } from "react";
import UserCard from "../Components/UserCard/UserCard";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const UserCardList = () => {
  const [cardDataObj, setCardDataObj] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  const { user } = useContext(AuthContext);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [databasePrice, setDataBasePrice] = useState([]);

  const navigate = useNavigate();

  const getPrice = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_DATABASE_URL}/onlyPrice`,
      cardDataObj
    );
    setDataBasePrice(res.data);
  };
  const totalHandle = () => {
    let tempTotalPrice = 0;
    let tempTotalQuantity = 0;
    for (let index = 0; index < cardDataObj.length; index++) {
      const element = cardDataObj[index];
      tempTotalQuantity += element.quantity;
      tempTotalPrice += databasePrice[index]?.price * element.quantity;
    }
    setTotalPrice(tempTotalPrice);
    setTotalQuantity(tempTotalQuantity);
  };

  const checkOutHandle = () => {
    if (cardDataObj.length === 0) {
      toast.error("No data");
    } else if (!user && cardDataObj.length > 0) {
      Swal.fire({
        title:
          "Do you want to save the check out?\nPlace create an account for tracking your orders.",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Create Account",
        denyButtonText: `Don't Create Account`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/sing-in-sing-up");
        } else if (result.isDenied) {
          Swal.fire("Orders Placed!", "", "success")
            .then(localStorage.removeItem("cartList"))
            .then(setCardDataObj([]));
        }
      });
    } else if (cardDataObj.length > 0) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",

        confirmButtonText: "Conform!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };

  useEffect(() => {
    getPrice();
  }, [cardDataObj]);

  useEffect(() => {
    totalHandle();
  }, [cardDataObj, databasePrice]);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cardDataObj));
  }, [cardDataObj]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl lg:text-6xl font-bold">Your Cart</h1>
      <div
        className={`grid gap-4 mt-10 mb-10 justify-center ${
          cardDataObj.length && " lg:grid-cols-2"
        }`}
      >
        {cardDataObj?.length ? (
          cardDataObj?.map((e) => (
            <UserCard
              key={e.id}
              dataLS={e}
              setCardDataObj={setCardDataObj}
              cardDataObj={cardDataObj}
            />
          ))
        ) : (
          <p>No Data</p>
        )}
      </div>
      <div className="md:flex justify-around text-2xl font-semibold items-center">
        <div className="md:flex w-full justify-around">
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Price: {totalPrice.toFixed(2)}</p>
        </div>
        <div className="md:w-1/4 flex justify-center md:justify-end">
          <button
            onClick={checkOutHandle}
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full" />
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
            <span className="text-base md:text-lg lg:text-2xl font-bold relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Check Out
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCardList;
