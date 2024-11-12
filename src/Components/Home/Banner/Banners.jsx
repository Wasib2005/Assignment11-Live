import { Carousel } from "flowbite-react";
import useDataFetching from "../../../Hooks/useDataFetching";
import Banner from "./Banner";

const Banners = () => {
  const { data, isLoading, error } = useDataFetching(
    "food_data_random?needData=6&name=1&price=1&description=1&cookingTime=1&image=1&rating=1"
  );
  if (isLoading) return;
  return (
    <div className="mt-5 md:mt-10 lg:mt-16">
      <Carousel slideInterval={5000}>
        {data.map((e) => (
          <Banner key={e._id} data={e}/>
        ))}
      </Carousel>
    </div>
  );
};

export default Banners;
