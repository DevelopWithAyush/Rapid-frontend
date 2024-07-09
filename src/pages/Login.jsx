import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          password: password,
        }),
      });

      // Check if response is OK (status code 200-299)

      const json = await res.json();
      console.log(json);
      if (json.success === true) {
        toast.success(json.message);
        setUser(true)
        
      } else if (json.success === false) {
        // Handle other server-side errors
        toast.error(json.message);
      }
    } catch (error) {
      toast.error(error.message || error);
    }
  };

  const signupSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          userEmail: email,
          password: password,
        }),
      });
      const json = await res.json();
      console.log(json);
      if (json.success === true) {
        toast.success(json.message);
        navigate("/");
      } else if (json.success === false) {
        toast.error(json.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[325px] md:w-[400px] bg-[#FF4900] py-3 px-6 flex flex-col items-center rounded-[12px] gap-8 duration-1000 transition ease-in ">
        {login ? (
          <>
            <p className="text-[24px] font-semibold">Login</p>
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
            <p>
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
            <p className="text-[24px] font-semibold">SignUp</p>
            <form className=" flex flex-col items-center gap-6 w-full">
              {/* <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Name"
                type="file"
                className="bg-transparent outline-none border border-white rounded-[12px] w-full text-[16px] py-3 px-6  placeholder-green-100"
              /> */}
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
            <p>
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
    </div>
  );
};

export default Login;
