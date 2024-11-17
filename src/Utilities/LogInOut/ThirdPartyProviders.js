import { signInWithPopup } from "firebase/auth";
import { auth } from "../../Auth/Auth";

export const ThirdPartyProviders = (provider) => {
  signInWithPopup(auth, provider);
};
