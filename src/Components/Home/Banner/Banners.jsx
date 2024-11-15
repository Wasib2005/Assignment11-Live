import { Carousel } from "flowbite-react";
import useDataFetching from "../../../Hooks/useDataFetching";
import Banner from "./Banner";
import Loading from "../../Loading";

const Banners = () => {
  const { data, isLoading, error } = useDataFetching(
    "food_data_random",
    1000 * 60 * 10
  );
  if (isLoading) return;
  if (error) return;

  return (
    <div className="mt-5 md:mt-10 lg:mt-16">
      <Carousel slideInterval={5000}>
        {data.map((e) => (
          <Banner key={`B${e._id}`} data={e} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banners;
