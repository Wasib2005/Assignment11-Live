import { useState } from "react";
import SingInForSingIn from "../Components/Registration/SingIn/SingInForSingIn";
import SingInForSingUp from "../Components/Registration/SingIn/SingInForSingUp";
import SingUpForSingIn from "../Components/Registration/SingUp/SingUpForSingIn";
import SingUpForSingUp from "../Components/Registration/SingUp/SingUpForSingUp";


const UserLog = () => {
  const [singIn, setSingIn] = useState(true);
  const singInSingUpHandle = () => {
    setSingIn(!singIn);
    console.log(singIn);
  };
  console.log(singIn);
  return (
    <>
      <div className="flex justify-center items-center   text-center dark:text-white p-40">
        <div className=" animate-fade-up w-[650px] lg:w-[1200px] lg:h-[700px] border rounded-3xl shadow-2xl flex lg:animate-fade animate-once animate-delay-2000 animate-ease-out">
          {singIn ? (
            <SingInForSingIn singInSingUpHandle={singInSingUpHandle} />
          ) : (
            <SingInForSingUp singInSingUpHandle={singInSingUpHandle} />
          )}
          {singIn ? (
            <SingUpForSingIn singInSingUpHandle={singInSingUpHandle} />
          ) : (
            <SingUpForSingUp singInSingUpHandle={singInSingUpHandle} />
          )}
        </div>
      </div>
    </>
  );
};

export default UserLog;
