import { Label, Select } from "flowbite-react";

const OwnerOrder = ({ order }) => {
  console.log(order);

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

  const orderStatus = () => {
    return (
      <Select
        id="status"
        className="text-gray-900 bg-white border border-gray-300 focus:border-blue-500 dark:text-white dark:bg-gray-800 dark:border-gray-600"
        required
      >
        <option className="text-gray-500">Pending</option>
        <option className="text-green-600">Received</option>
        <option className="text-blue-600">Successful</option>
        <option className="text-red-600">Failed</option>
      </Select>
    );
  };

  const formattedDate = formatDate(order?.date);
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between">
        <h1 className="uppercase md:text-xl font-semibold">
          Order ID: {order?._id}
        </h1>
        <h1 className="md:text-xl font-semibold hidden md:inline">
          Date: {formattedDate}
        </h1>
        <div className="max-w-md hidden md:inline">{orderStatus()}</div>
      </div>
      <div className="flex justify-between md:hidden">
        <h1 className="md:text-xl font-semibold">Date: {formattedDate}</h1>
        {orderStatus()}
      </div>
      <h1 className="text-right md:pr-10 lg:pr-20">
        Total Price: ${order?.price}
      </h1>
    </div>
  );
};

export default OwnerOrder;
