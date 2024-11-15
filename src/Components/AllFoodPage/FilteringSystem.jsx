import { Select } from "flowbite-react";
import useDataFetching from "../../Hooks/useDataFetching";

const FilteringSystem = () => {
  const { data, isLoading, error } = useDataFetching(
    "food_filter_option/category"
  );

  if (isLoading&&!data) return;
  if (error) {
    return;
  }

  return (
    <>
      <Select id="Category" name="Category" required>
        <option value="default" defaultChecked>Select Category</option>
        {data.filterArray.map((e, i) => (
          <option key={`selection${i}`}>{e}</option>
        ))}
      </Select>
    </>
  );
};

export default FilteringSystem;
