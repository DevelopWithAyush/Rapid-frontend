import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { server } from "../../constants/config";
import { userExists } from "../../redux/reducers/auth";
import { HandleContext } from "../../hooks/HandleState";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("loging...");
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        {
          userEmail: email,
          password: password,
        },
        config
      );
      dispatch(userExists(true));
      toast.success(data.message, { id: toastId });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something wend wrong", {
        id: toastId,
      });
    }
  };

  const signupSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Register new id...");
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    formData.append("userEmail", email);
    formData.append("password", password);
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/register`,
        formData,
        config
      );
      dispatch(userExists(true));
      toast.success(data.message, { id: toastId });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something wend wrong", {
        id: toastId,
      });
    }
  };

  const { openLogin, setOpenLogin } = useContext(HandleContext);

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setOpenLogin(false);
        }}
        className={`z-[49] ${
          openLogin ? "scale-100" : "scale-0"
        } fixed top-0 left-0 w-[100vw] h-[100vh]   bg-black bg-opacity-50 blur-[20px] duration-300 transition ease-in `}
      />

      <div
        className={`z-50 w-[325px] ${
          openLogin ? " scale-100" : "scale-0"
        } fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-1 md:w-[400px] bg-[#FF4900] py-3 px-6 flex flex-col items-center rounded-[12px] gap-8 duration-300 transition ease-in `}
      >
        {login ? (
          <>
            <p className="text-[24px] font-semibold text-white">Login</p>
            <form className=" flex flex-col items-center gap-6 w-full">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="text"
                className="bg-transparent outline-none border border-white rounded-[12px] w-full text-[16px] py-3 px-6  placeholder-green-100"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                type="password"
                className="bg-transparent outline-none border border-white rounded-[12px] w-full text-[16px] py-3 px-6 placeholder-green-100 "
              />

              <button
                className="py-3 px-6 bg-white text-[#FF4900] rounded-[12px] font-medium text-[16px] "
                onClick={loginSubmit}
              >
                Submit
              </button>
            </form>
            <p className="text-white">
              Not have accout?{" "}
              <button
                className="font-medium"
                onClick={() => {
                  setLogin(false);
                }}
              >
                SignUp
              </button>
            </p>{" "}
          </>
        ) : (
          <>
            <p className="text-[24px] font-semibold text-white">SignUp</p>
            <form className=" flex flex-col items-center gap-6 w-full">
              <input
                type="file"
                name="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
                required
                className="bg-transparent outline-none border border-white rounded-[12px] w-full text-[16px] py-3 px-6 placeholder-green-100"
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
                type="text"
                className="bg-transparent outline-none border border-white rounded-[12px] w-full text-[16px] py-3 px-6  placeholder-green-100"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="text"
                className="bg-transparent outline-none border border-white rounded-[12px] w-full text-[16px] py-3 px-6  placeholder-green-100"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                type="password"
                className="bg-transparent outline-none border border-white rounded-[12px] w-full text-[16px] py-3 px-6 placeholder-green-100 "
              />

              <button
                className="py-3 px-6 bg-white text-[#FF4900] rounded-[12px] font-medium text-[16px]"
                onClick={signupSubmit}
              >
                Submit
              </button>
            </form>
            <p className="text-white">
              Already have accout?{" "}
              <button
                className="font-medium"
                onClick={() => {
                  setLogin(true);
                }}
              >
                Login
              </button>
            </p>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Login;
