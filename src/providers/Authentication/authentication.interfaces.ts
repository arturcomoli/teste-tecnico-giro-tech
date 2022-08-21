import { ReactNode } from "react";
import { LoginData } from "../../pages/Login/login.interfaces";

export interface AuthProviderData {
  handleLogin: (data: LoginData) => void;
  handleLogout: () => void;
  user: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}
