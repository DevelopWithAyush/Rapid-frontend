import axios from "axios";
import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import Loader from "./components/features/Loader";
import Toasters from "./components/shared/Toasters";
import { server } from "./constants/config";
import HandleState from "./hooks/HandleState";
import { SocketProvider } from "./hooks/socket";
import { userExists, userNotExists } from "./redux/reducers/auth";

const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const Gorups = lazy(() => import("./pages/Gorups"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/me`, { withCredentials: true })
      .then(({ data }) => dispatch(userExists(data.user)))
      .catch((err) => dispatch(userNotExists()));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <HandleState>
        <Suspense fallback={<Loader />}>
          <Toasters />
          <div className="flex flex-col justify-center w-[100vw] h-[100vh] items-center xl:hidden">
<p className="text-center text-[24px] font-semibold capitalize text-[#FF4900]" >we working to  launch it for phone and tablet soon... <br />😊</p>
          </div>
          <div className="hidden xl:flex ">
            <Routes>
              <Route element={<SocketProvider>
                <ProtectRoute user={user} /><ProtectRoute user={user} />
              </SocketProvider>}>
                <Route path="/" element={<Home />} />
                <Route path="/chat/:chatId" element={<Chat />} />
                <Route path="/groups" element={<Gorups />} />
              </Route>
              <Route
                path="/login"
                element={
                  <ProtectRoute user={!user} redirect="/">
                    <Login />
                  </ProtectRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </HandleState>
    </BrowserRouter>
  );
};

export default App;
