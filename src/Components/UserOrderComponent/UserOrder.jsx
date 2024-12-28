import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

const UserOrder = ({ order }) => {
  const formatDate = (dateData) => {
    if (!dateData) return "";
    const rawDate = new Date(dateData);
    return rawDate
      .toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
      .replace(",", "")
      .split(" ")
      .join("-");
  };

  const formattedDate = formatDate(order?.date);

  return (
    <div className=" border rounded-lg p-4">
      <div className="flex justify-between">
        <h1 className="uppercase md:text-xl font-semibold">
          Order ID: {order?._id}
        </h1>
        <h1 className=" md:text-xl font-semibold hidden md:inline">
          Date: {formattedDate}
        </h1>
        <h1
          className={`md:text-xl font-semibold hidden md:inline ${
            order.statue === "received"
              ? "text-green-500"
              : order.statue === "successful"
              ? "text-blue-500"
              : "text-gray-500"
          }`}
        >
          {order.statue === "received" || order.statue === "successful"
            ? order.statue
            : "Pending"}
        </h1>
      </div>
      <div className="flex justify-between">
        <h1 className=" md:text-xl font-semibold">
          Date: {formattedDate}
        </h1>
        <h1
          className={`md:text-xl font-semibold ${
            order.statue === "received"
              ? "text-green-500"
              : order.statue === "successful"
              ? "text-blue-500"
              : "text-gray-500"
          }`}
        >
          {order.statue === "received" || order.statue === "successful"
            ? order.statue
            : "Pending"}
        </h1>
      </div>
      <div className="p-3 grid gap-3">
        {order?.orders?.map((data, i) => (
          <OrderItem key={`orderListItem${data?.item?.id}${i}`} item={data} />
        ))}
      </div>
      <h1 className="text-right md:pr-10 lg:pr-20">
        Total Price: ${order?.price}
      </h1>
    </div>
  );
};

export default UserOrder;
