import axios from "axios";
import { FloatingLabel, Label, Radio } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowUp } from "react-icons/fa";

const Form = ({ isNew }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const formHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {};
    const image = {};
    const field = [
      "name",
      "price",
      "cookingTime",
      "category",
      "description",
      "available",
      "image1",
      "image2",
      "ingredients",
    ];
    for (let index = 0; index < field.length; index++) {
      const element = field[index];
      if (element === "image1") {
        image["1:1"] = form[element].value;
      } else if (element === "image2") {
        image["16:9"] = form[element].value;
      } else if (element === "ingredients") {
        const ingredients = ("dsf1", form[element].value.split(","));
        formData.ingredients = ingredients;
      } else if (Number(form.price.value) && Number(form.cookingTime.value)) {
        formData[element] = form[element].value;
      } else if (!Number(form.price.value) || !Number(form.cookingTime.value)) {
        toast.error("Price and Cooking Time Only Number Allowed");
        break;
      }
    }
    formData.isNew = isNew;
    formData.image = image;

    axios
      .post(`${import.meta.env.VITE_DATABASE_URL}/upload_update`, formData, {
        withCredentials: true,
      })
      .then((res) =>
        toast.success(
          `${
            res.data.acknowledged &&
            `New Data ${isNew ? "Uploaded" : "Updated"}`
          }`
        )
      )
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  return (
    <form className="text-center p-4" onSubmit={formHandle}>
      <FloatingLabel
        required
        className="rounded-lg"
        name="name"
        variant="filled"
        label={`${isNew ? "New" : ""} Food Name`}
      />
      <div className=" md:flex w-full gap-3">
        <div className="w-full">
          <FloatingLabel
            required
            className="rounded-lg"
            name="price"
            variant="filled"
            label={`Price`}
          />
        </div>
        <div className="w-full">
          <FloatingLabel
            required
            className="rounded-lg"
            name="cookingTime"
            variant="filled"
            label={`Cooking Time`}
          />
        </div>
      </div>
      <div className="lg:flex gap-2 ">
        <div className="lg:w-2/3">
          <FloatingLabel
            required
            className="rounded-lg"
            name="category"
            variant="filled"
            label={`Category`}
          />
        </div>
        <div className="flex justify-center mb-4">
          <fieldset className="flex max-w-md flex-col gap-4">
            <div className="flex items-center gap-5">
              <legend className=" md:text-xl font-bold">
                Available Status
              </legend>
              <div className="flex items-center gap-2">
                <Radio
                  id="available"
                  name="available"
                  value={true}
                  defaultChecked
                />
                <Label className="md:text-lg" htmlFor="available">
                  Available
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="NotAvailable" name="available" value={false} />
                <Label className="md:text-lg" htmlFor="NotAvailable">
                  Not Available
                </Label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <FloatingLabel
        required
        className="rounded-lg"
        name="ingredients"
        variant="filled"
        label="Ingredients"
      />
      <FloatingLabel
        required
        className="rounded-lg"
        name="description"
        variant="filled"
        label="Description"
      />
      <h1 className="text-3xl font-bold mb-2">Image</h1>
      <div className=" md:flex w-full gap-3">
        <div className="w-full flex-col ">
          <div className="w-full flex justify-center mb-4 ">
            {image1 && (
              <img className="md:max-h-[400px] max-h-[300px]" src={image1} alt="Image 1" />
            )}
          </div>
          <FloatingLabel
            onChange={(e) => {
              setImage1(e.target.value);
            }}
            required
            type="url"
            className="rounded-lg"
            name="image1"
            variant="filled"
            label={`Image 1:1`}
          />
        </div>
        <div className="w-full flex-col ">
          <div className="w-full flex justify-center mb-4 ">
            {image2 && (
              <img className="md:max-h-[400px] max-h-[300px]" src={image2} alt="Image 2" />
            )}
          </div>
          <FloatingLabel
            onChange={(e) => {
              setImage2(e.target.value);
            }}
            required
            type="url"
            className="rounded-lg"
            name="image2"
            variant="filled"
            label={`Image 16:9`}
          />
        </div>
      </div>
      <div className="text-left">
        <button className=" relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-400 rounded-3xl shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-y-full bg-green-400 group-hover:translate-y-0 ease">
            <FaArrowUp />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-green-400 transition-all duration-300 transform group-hover:translate-y-full ease">
            {isNew ? "Upload" : "Update"}
          </span>
          <span className="relative invisible">Button Text</span>
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  isNew: PropTypes.bool.isRequired,
};

export default Form;
