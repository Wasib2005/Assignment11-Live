import useDataFetching from "../../Hooks/useDataFetching";

const OrderItem = (data) => {
  const { data: fetchedData, isLoading } = useDataFetching(
    `foodData?id=${data?.item?.id}`
  );

  if (isLoading) return <p>Loading...</p>;

  console.log(fetchedData.price);

  return (
    <>
      <div className="flex justify-around items-center text-[10px]">
        <img
          className="border w-20 h-20"
          src={fetchedData.image["1:1"]}
          alt={fetchedData.name}
        />
        <p>{fetchedData ? fetchedData.name : "No Data Found"}</p>
        <p>Quantity: {data?.item?.quantity}</p>
        <p>Price: {fetchedData.price*data?.item?.quantity}</p>
      </div>
    </>
  );
};
export default OrderItem;
