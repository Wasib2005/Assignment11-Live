import useDataFetching from "../../../Hooks/useDataFetching";
import Card from "../../Card";
import Loading from "../../Loading";
import { useState } from "react";
const Favorite = () => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  const { data, isLoading, error } = useDataFetching(
    "food_data_top_sell?",
    1000 * 60 * 10
  );

  if (isLoading) return;
  if (error) {
    return;
  }
  return (
    <div className="mt-10 mb-10 md:mt-20 lg:mt-28 grid justify-center">
      <h1 className="text-2xl md:text-5xl font-bold text-center">
        Our Top Rated Choose
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {data.map((food) => (
          <Card
            key={`f${food._id}`}
            food={food}
            cartList={cartList}
            setCartList={setCartList}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
