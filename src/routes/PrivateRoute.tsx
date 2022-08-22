import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (!user) return setAuthenticated(false);
    return setAuthenticated(true);
  }, [location, user]);

  return authenticated;
};
export default PrivateRoute;
