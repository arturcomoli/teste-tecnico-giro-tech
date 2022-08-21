import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginData } from "../../pages/Login/login.interfaces";
import {
  AuthProviderData,
  AuthProviderProps,
} from "./authentication.interfaces";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<string>(
    () => localStorage.getItem("user") || ""
  );

  const handleLogin = (data: LoginData) => {
    localStorage.setItem("user", data.email);
    setUser(data.email);
    toast.success("Logado com sucesso!");
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
