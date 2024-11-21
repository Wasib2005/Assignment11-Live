import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Auth/Auth";
import UserProfileUpdate from "./UserProfileUpdate";
import toast from "react-hot-toast";

const EmailAuth = (singIn, userEmail, userPassword, userName) => {
  if (singIn) {
    signInWithEmailAndPassword(auth, userEmail, userPassword).then(
      toast.success(`Welcome back ${auth.currentUser?.displayName}`)
    );
  } else {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        return UserProfileUpdate({ displayName: userName }, true);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        toast.error("Failed to create an account. Please try again.");
      });
  }
  console.log(auth.currentUser);
  return;
};

export default EmailAuth;
