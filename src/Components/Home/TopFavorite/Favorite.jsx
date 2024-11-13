import useDataFetching from "../../../Hooks/useDataFetching";
import Card from "../../Card";
import Loading from "../../Loading";

const Favorite = () => {
  const { data, isLoading, error } = useDataFetching(
    "food_data_top_sell?",
    1000 * 60 * 10
  );
  if (isLoading)
    return (
      <>
        <Loading message={"Banner Loading"} />
      </>
    );
  if (error) {
    console.log(error);
    return <p>Something Went Wrong</p>;
  }
  return (
    <div className="mt-10 mb-10 md:mt-20 lg:mt-28 grid justify-center">
      <h1 className="text-2xl md:text-5xl font-bold text-center">Our Top Rated Choose</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {data.map((food) => (
          <Card key={`f${food._id}`} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
