import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toasters from "./components/Toasters";
import ProtectRoute from "./components/auth/ProtectRoute";
import HandleState from "./hooks/HandleState";
import AppLayout from "./components/layout/AppLayout";
import Loader from "./components/features/Loader";

const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const Gorups = lazy(() => import("./pages/Gorups"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [user, setUser] = useState(true);
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
                  <Login setUser={setUser} />
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
