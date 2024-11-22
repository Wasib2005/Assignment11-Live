import { useState } from "react";
import PropTypes from "prop-types";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import AuthProviderComponent from "../AuthProviderComponent";
import EmailAuth from "../../../Utilities/LogInOut/EmailAuth";
import toast from "react-hot-toast";

const SingUpForSingUp = ({ singIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    const tempShowPassword = !showPassword;
    setShowPassword(tempShowPassword);
    if (tempShowPassword) {
      document.getElementById("password").type = Text;
      document.getElementById("ConformPassword").type = Text;
    } else {
      document.getElementById("password").type = "Password";
      document.getElementById("ConformPassword").type = "Password";
    }
  };

  const handleSingIn = (e) => {
    e.preventDefault();
    const usrForm = e.target;
    const userName = usrForm.name.value;
    const userEmail = usrForm.email.value;
    const userPassword = usrForm.password.value;
    const userConformPassword = usrForm.ConformPassword.value;

    const passwordMinLength = 10;

    if (userPassword.length < passwordMinLength) {
      toast.error(
        `The password must be at least ${passwordMinLength} characters long.`
      );
      return;
    }
    if (!/[0-9]/.test(userPassword)) {
      toast.error("The password must include at least one digit (0-9).");
      return;
    }
    if (!/[A-Z]/.test(userPassword)) {
      toast.error(
        "The password must include at least one uppercase letter (A-Z)."
      );
      return;
    }
    if (!/[a-z]/.test(userPassword)) {
      toast.error(
        "The password must include at least one lowercase letter (a-z)."
      );
      return;
    }
    if (!/[@#$%^&*(){}+\-=?<>,.`~']/.test(userPassword)) {
      toast.error(
        "The password must include at least one special character (@#$%^&*+)."
      );
      return;
    }
    if (userPassword !== userConformPassword) {
      toast.error("The passwords do not match.");
      return;
    }


    EmailAuth(singIn, userEmail, userPassword, userName);
  };

  return (
    <div className="grid gap-6 p-[36px] w-full lg:w-1/2 animate-fade">
      <h1 className="text-6xl font-extrabold">Sing Up</h1>
      <AuthProviderComponent />
      <p>or use your account</p>
      <form onSubmit={handleSingIn} className="flex flex-col w-96 gap-3 m-auto">
        <input
          placeholder="Enter Your Name"
          type="text"
          name="name"
          className="p-3 bg-slate-300 focus:outline-none focus:outline-success"
          required
        />
        <small
          id="NameError"
          className="text-red-600 text-left font-bold"
        ></small>
        <input
          placeholder="Enter Email"
          type="email"
          name="email"
          className="p-3 bg-slate-300  focus:outline-none focus:outline-success"
          required
        />
        <small
          id="EmailError"
          className="text-red-600 text-left font-bold"
        ></small>
        <div className="flex relative">
          <input
            id="password"
            placeholder="Enter A Password"
            type="password"
            name="password"
            className="p-3 bg-slate-300 w-full  focus:outline-none focus:outline-success"
            required
          />
          <div
            onClick={handleShowPassword}
            className="absolute top-[10px] right-3 hover:bg-slate-100 rounded-full"
          >
            {showPassword ? (
              <RiEyeCloseLine size={25} />
            ) : (
              <FaRegEye size={25} />
            )}
          </div>
        </div>
        <small
          id="PasswordError"
          className="text-red-600 text-left font-bold"
        ></small>
        <div className="flex relative">
          <input
            id="ConformPassword"
            placeholder="Conform The Password"
            type="password"
            name="ConformPassword"
            className="p-3 bg-slate-300 w-full  focus:outline-none focus:outline-success"
            required
          />
          <div
            onClick={handleShowPassword}
            className="absolute top-[10px] right-3 hover:bg-slate-100 rounded-full"
          >
            {showPassword ? (
              <RiEyeCloseLine size={25} />
            ) : (
              <FaRegEye size={25} />
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="btn py-2 bg-green-500 text-white rounded-3xl text-lg font-bold w-1/3 hover:opacity-50"
          >
            Sing Up
          </button>
        </div>
      </form>
      <p>
        If you are new then you can sing up.{" "}
        <span className="font-bold">Click Below!!!</span>
      </p>
    </div>
  );
};

SingUpForSingUp.propTypes = {
  singIn: PropTypes.bool.isRequired,
};

export default SingUpForSingUp;
