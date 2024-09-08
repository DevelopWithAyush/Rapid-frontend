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
import Landing from "./pages/Landing";
import { userExists, userNotExists } from "./redux/reducers/auth";

const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./components/shared/Login"));
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
                  <Landing />
                </ProtectRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HandleState>
    </BrowserRouter>
  );
};

export default App;
