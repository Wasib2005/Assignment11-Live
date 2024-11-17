import { updateProfile } from "firebase/auth";
import { auth } from "../../Auth/Auth";
import toast from "react-hot-toast";

const UserProfileUpdate = (userData, sing_up) => {
  console.log(1);
  updateProfile(auth.currentUser, userData)
    .then(
      toast.success(
        sing_up
          ? `Thank you for signing up with us, ${userData.displayName}!`
          : "Profile Updated"
      )
    )
    .catch((error) => {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    });

  return;
};

export default UserProfileUpdate;
