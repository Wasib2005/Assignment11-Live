import axios from "axios";

const UserCreateInDatabase = (displayName, email, how) => {
  axios
    .post(`${import.meta.env.VITE_DATABASE_URL}/create_new_user`, {
      displayName,
      email,
      how,
    })
    .catch((res) => console.log(res));
};

export default UserCreateInDatabase;
