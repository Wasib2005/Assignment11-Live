const OwnerOrdersNavBar = ({ filterOption, setFilterOption }) => {
  return (
    <div className="flex items-end -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-900 dark:text-gray-100 text-gray-800">
      <div className="border-b border-black w-full dark:border-white" />
      <p
        onClick={() => setFilterOption("All")}
        className={`p-2 ${
          filterOption === "All" ? "border border-b-0 rounded-t-lg" : "border-b"
        } dark:border-white md:text-2xl font-semibold border-black`}
      >
        All
      </p>
      <p
        onClick={() => setFilterOption("Pending")}
        className={`p-2 ${
          filterOption === "Pending"
            ? "border border-b-0 rounded-t-lg"
            : "border-b"
        } dark:border-white md:text-2xl font-semibold border-black`}
      >
        Pending
      </p>
      <p
        onClick={() => setFilterOption("Received")}
        className={`p-2 ${
          filterOption === "Received"
            ? "border border-b-0 rounded-t-lg"
            : "border-b"
        } dark:border-white md:text-2xl font-semibold border-black`}
      >
        Received
      </p>
      <p
        onClick={() => setFilterOption("Successful")}
        className={`p-2 ${
          filterOption === "Successful"
            ? "border border-b-0 rounded-t-lg"
            : "border-b"
        } dark:border-white md:text-2xl font-semibold border-black`}
      >
        Successful
      </p>
      <p
        onClick={() => setFilterOption("Failed")}
        className={`p-2 ${
          filterOption === "Failed"
            ? "border border-b-0 rounded-t-lg"
            : "border-b"
        } dark:border-white md:text-2xl font-semibold border-black`}
      >
        Failed
      </p>
      <div className="border-b border-black w-full dark:border-white" />
    </div>
  );
};
export default OwnerOrdersNavBar;
