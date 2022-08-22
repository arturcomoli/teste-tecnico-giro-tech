import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Result from "../pages/Result";

import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  const authenticated = PrivateRoute();

  return (
    <Routes>
      <Route path={"/"} element={!authenticated ? <Login /> : <Home />} />

      <Route path={"/home"} element={authenticated ? <Home /> : <Login />} />
      <Route
        path={"/result"}
        element={authenticated ? <Result /> : <Login />}
      />
    </Routes>
  );
};
export default AppRoutes;
