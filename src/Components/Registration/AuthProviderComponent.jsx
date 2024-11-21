import { FaFacebookF, FaGithubSquare, FaGoogle } from "react-icons/fa";
import { ThirdPartyProviders } from "../../Utilities/LogInOut/ThirdPartyProviders";
import { GoogleProvider } from "../../Utilities/LogInOut/ThirdPartyAuthProviders/GoogleAuth";
const AuthProviderComponent = () => {
  return (
    <div className="flex gap-2 justify-center">
      <div className="flex items-center border rounded-full p-3 hover:bg-blue-200 ">
        <FaFacebookF size={35} />
      </div>
      <div
        onClick={() => ThirdPartyProviders(GoogleProvider, "google")}
        className="flex items-center border rounded-full p-3 hover:bg-blue-200 "
      >
        <FaGoogle size={35} />
      </div>
      <div className="flex items-center border rounded-full p-3 hover:bg-blue-200 ">
        <FaGithubSquare size={35} />
      </div>
    </div>
  );
};

export default AuthProviderComponent;
