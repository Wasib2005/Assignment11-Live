import { FloatingLabel, Pagination, Select } from "flowbite-react";
import Card from "../Components/Card";
import useDataFetching from "../Hooks/useDataFetching";
import { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { LoadingContext } from "../Contexts/LoadingContext";
// import { useQuery } from 'react-query';
import axios from "axios";

const AllFoodPage = () => {
  const { data: allCategories } = useDataFetching(
    "food_filter_option/category",
    1000 * 60
  );

  const [selectedPage, setSelectedPage] = useState(1);
  const [foodData, setFoodData] = useState(null);
  const [rating, setRating] = useState(0);
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  const { setIsLoading } = useContext(LoadingContext);

  const perPage = 10;

  // Form data submission handling
  const FilterFormHandle = async () => {
    const form = document.getElementById("FilterForm");
    if (!form) return;

    // Form data object
    const formFilter = {
      Category: form.Category.value,
      Order: form.Order.value,
      minPrice: form.minPrice.value,
      maxPrice: form.maxPrice.value,
      minCookingTime: form.minCookingTime.value,
      maxCookingTime: form.maxCookingTime.value,
      SortBy: form.SortBy.value,
      selectedPage,

      perPage,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_DATABASE_URL}/data_filter`,
        formFilter
      );
      setFoodData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const paginationHandle = (page) => {
    setSelectedPage(page);
  };

  useEffect(() => FilterFormHandle, [selectedPage]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl md:text-5xl font-bold">All Available Options</h1>
      <div className="flex flex-col lg:flex-row gap-4 mt-10">
        <div className="lg:w-1/3">
          <form
            onChange={FilterFormHandle}
            id="FilterForm"
            className="grid gap-2 lg:gap-5 sticky top-20"
          >
            {/* Category, Sort, and Order Selections */}
            <div className=" gap-3 w-full grid lg:gap-5">
              <h3>Filter</h3>
              <div className=" lg:w-full">
                <Select id="Category" name="Category" required>
                  <option value="default" defaultChecked>
                    Select Category
                  </option>
                  {allCategories?.filterArray?.map((e, i) => (
                    <option key={`selection${i}`}>{e}</option>
                  ))}
                </Select>
              </div>
              {/* Price and Time Filters */}
              <div className="md:flex lg:grid gap-2 lg:gap-5">
                <div className="flex justify-between items-center gap-4">
                  <p className=" text-xl font-semibold">Price: </p>
                  <FloatingLabel
                    name="minPrice"
                    variant="outlined"
                    label="Min Price"
                  />
                  <FloatingLabel
                    name="maxPrice"
                    variant="outlined"
                    label="Max Price"
                  />
                </div>
                <div className="flex justify-between items-center gap-4">
                  <p className=" text-xl font-semibold">Time: </p>
                  <FloatingLabel
                    name="minCookingTime"
                    variant="outlined"
                    label="Min Time"
                  />
                  <FloatingLabel
                    name="maxCookingTime"
                    variant="outlined"
                    label="Max Time"
                  />
                </div>
              </div>
              <h3>Sort By</h3>
              <div className=" lg:w-full flex gap-2">
                <div className="w-full">
                  <Select id="SortBy" name="SortBy" required>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                    <option value="cookingTime">Cooking Time</option>
                  </Select>
                </div>
                <div className="w-full">
                  <Select id="Order" name="Order" required>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="reset"
                onClick={FilterFormHandle}
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute" />
                <span className="relative px-4 py-2 transition-all ease-out bg-white dark:bg-slate-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative group-hover:text-white">Reset</span>
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Food Data Display */}
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
          {foodData && foodData.length === 0 ? (
            <p>No data available</p>
          ) : (
            foodData?.results?.map((e) => (
              <Card
                key={e._id}
                food={e}
                isRow={false}
                cartList={cartList}
                setCartList={setCartList}
              />
            ))
          )}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={selectedPage} // Ensure currentPage is within the valid range
        totalPages={
          foodData?.count > 0 ? Math.ceil(foodData?.count / perPage) : 1
        }
        onPageChange={paginationHandle}
        showIcons
      />
    </div>
  );
};

export default AllFoodPage;
