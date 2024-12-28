import axios from "axios";
import Swal from "sweetalert2";

const DeleteFromDB = (id, foods, setFoods) => {


  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .post(
          `${import.meta.env.VITE_DATABASE_URL}/delete_with_id`,
          { id },
          { withCredentials: true }
        )
        .then((res) => {
          if (res?.data?.deletedCount && foods) {
            const tempFoods = foods.filter((e) => e._id !== id);
            setFoods(tempFoods);
          }
        })
        .then(
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          })
        )
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    }
  });
};

export default DeleteFromDB;
