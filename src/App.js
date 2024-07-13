import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import HandleState from "./hooks/HandleState";
import Loader from "./components/features/Loader";
import Toasters from "./components/shared/Toasters";
import { server } from "./constants/config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
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
          <Routes>
            <Route element={<ProtectRoute user={user} />}>
              <Route path="/" element={<Home />} />
              <Route path="/chat/:userId" element={<Chat />} />
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
        </Suspense>
      </HandleState>
    </BrowserRouter>
  );
};

export default App;
