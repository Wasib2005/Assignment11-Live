import { signOut } from "firebase/auth";
import { auth } from "../../Auth/Auth";
import axios from "axios";

const LogOut = () => {
  signOut(auth)
    .then(() => {
      axios
        .post(
          `${import.meta.env.VITE_DATABASE_URL}/logout`,
          {},
          {
            withCredentials: true, // Send cookies with the request
          }
        )
        .then((res) => console.log(res));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default LogOut;
