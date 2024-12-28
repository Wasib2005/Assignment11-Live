import axios from "axios";
import React, { useEffect, useState } from "react";
import UserOrder from "../Components/UserOrderComponent/UserOrder";

const UserOrders = () => {
  const [orderData, setOrderData] = useState();


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DATABASE_URL}/user-order`, {
        withCredentials: true,
      })
      .then((res) => setOrderData(res.data));
  }, []);
  if (!orderData) return 
  return (
    <div className="grid gap-4">
      {orderData?.map((order) => (
        <UserOrder key={`orderList-${order._id}`} order={order} />
      ))}
    </div>
  );
};

export default UserOrders;
