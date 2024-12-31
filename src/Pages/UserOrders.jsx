import axios from "axios";
import React, { useEffect, useState } from "react";
import UserOrder from "../Components/UserOrderComponent/UserOrder";
import UserOrderHeader from "../Components/UserOrderComponent/UserOrderHeader";

const UserOrders = () => {
  const [orderData, setOrderData] = useState();
  const [filterOption, setFilterOption] = useState("All");

  console.log(filterOption)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DATABASE_URL}/user-order/${filterOption}`, {
        withCredentials: true,
      })
      .then((res) => setOrderData(res.data));
  }, [filterOption]);
  if (!orderData) return;
  return (
    <>
      <div className="my-3">
        <UserOrderHeader
          filterOption={filterOption}
          setFilterOption={setFilterOption}
        />
      </div>
      <div className="grid gap-4">
        {orderData?.map((order) => (
          <UserOrder key={`orderList-${order._id}`} order={order} />
        ))}
      </div>
    </>
  );
};

export default UserOrders;
