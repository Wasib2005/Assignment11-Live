import PropTypes from "prop-types";
import useDataFetching from "../../Hooks/useDataFetching";
import { MdCategory, MdDeleteForever } from "react-icons/md";
import { FaMinus, FaMoneyBillWave, FaPlus } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";

const UserCard = ({
  dataLS,
  setCardDataObj,
  cardDataObj,

}) => {
  const { data } = useDataFetching(`foodData?id=${dataLS.id}`);
 
  const removeFromCartList = () => {
    const tempCardObj = [...cardDataObj];
    setCardDataObj(tempCardObj.filter((e) => e.id !== data._id));
  };

  const quantityHandle = (What) => {
    if (What === "+") {

      setCardDataObj(
        cardDataObj.map((e) =>
          e.id === data._id ? { id: e.id, quantity: e.quantity + 1 } : e
        )
      );
    } else if (What === "-") {
      const tempList = [];
      for (let index = 0; index < cardDataObj.length; index++) {
        const element = cardDataObj[index];
        if (element.id === data._id) {
          element.quantity -= 1;
          if (element.quantity === 0) {
            continue;
          }
        }
        tempList.push(element);
      }
      setCardDataObj(tempList);
    }
  };


  return (
    <div className="md:flex gap-3 justify-between items-center border p-4 rounded-2xl bg-slate-50 dark:bg-slate-700">
      <div>
        <img
          src={data?.image["1:1"]}
          alt=""
          className="border rounded-xl  w-[150px] h-[150px]"
        />
      </div>
      <div>
        <h1 className="font-bold md:text-3xl">{data?.name}</h1>
        <p>Product ID: {data?._id.toUpperCase()}</p>
        <div className="flex gap-2 items-center">
          <MdCategory />
          <p>Category: {data?.category}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1">
            <FaMoneyBillWave />
            <span>{data?.price}</span>
          </p>
          <p className="flex items-center gap-1">
            <FaRegStarHalfStroke />
            <span>{data?.rating}</span>
          </p>
          <p className="flex items-center gap-1">
            <LuAlarmClock />
            <span>{data?.cookingTime} minutes</span>
          </p>
        </div>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <div
            onClick={() => quantityHandle("+")}
            className="p-2 rounded-full hover:bg-slate-400 dark:hover:bg-slate-600"
          >
            <FaPlus />
          </div>
          <div>
            <p className="">{dataLS?.quantity}</p>
          </div>
          <div
            onClick={() => quantityHandle("-")}
            className="p-2 rounded-full hover:bg-slate-400 dark:hover:bg-slate-600"
          >
            <FaMinus />
          </div>
        </div>
        <button
          onClick={removeFromCartList}
          className="relative inline-flex  items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-red-700 transition duration-300 ease-out border-2 border-red-700 rounded-xl shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-700 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
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
            <MdDeleteForever size={24} />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-red-700 transition-all duration-300 transform group-hover:translate-x-full ease">
            Delete
          </span>
          <span className="relative invisible">Delete</span>
        </button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  dataLS: PropTypes.obj,
  setCardDataObj: PropTypes.func,
  cardDataObj: PropTypes.array,
};

export default UserCard;
