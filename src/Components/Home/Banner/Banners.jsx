import { Carousel } from "flowbite-react";
import useDataFetching from "../../../Hooks/useDataFetching";
import Banner from "./Banner";

const Banners = () => {
  const { data, isLoading, error } = useDataFetching(
    "food_data_random?needData=6&name=1&price=1category&=1&cookingTime=1&image=1&rating=1"
  );
  if (isLoading) return;
  return (
    <div>
      <Carousel slideInterval={5000}>
        {data.map((e) => (
          <Banner key={e._id} data={e}/>
        ))}
      </Carousel>
    </div>
  );
};

export default Banners;
