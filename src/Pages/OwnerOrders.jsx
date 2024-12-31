import { useEffect, useState } from "react";
import OwnerOrdersNavBar from "../Components/OwnerOrdersComponent/OwnerOrdersNavBar";
import axios from "axios";
import OwnerOrder from "../Components/OwnerOrdersComponent/OwnerOrder";

const OwnerOrders = () => {
  const [filterOption, setFilterOption] = useState("All");
  const [orderData, setOrderData] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DATABASE_URL}/owner-order/${filterOption}`, {
        withCredentials: true,
      })
      .then((res) => setOrderData(res.data));
  }, [filterOption]);

  return (
    <>
      <div>
        <OwnerOrdersNavBar
          filterOption={filterOption}
          setFilterOption={setFilterOption}
        />
      </div>
      <div>
        <div className="grid gap-4">
          {orderData?.map((order) => (
            <OwnerOrder key={`orderList-${order._id}`} order={order} />
          ))}
        </div>
      </div>
    </>
  );
};
export default OwnerOrders;
