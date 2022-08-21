import { ReactNode } from "react";
import { AuthProvider } from "./Authentication";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default Providers;
