import { signInWithPopup } from "firebase/auth";
import { auth } from "../../Auth/Auth";
import axios from "axios";
import UserCreateInDatabase from "./UserCreateInDatabase";

export const ThirdPartyProviders = (provider, what_provider) => {
  signInWithPopup(auth, provider).then(
    UserCreateInDatabase(auth.currentUser.displayName, auth.currentUser.email,what_provider)
  );
};
