import { ReactNode } from "react";
import { AuthProvider } from "./Authentication";
import { InvestmentProvider } from "./Investment";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <InvestmentProvider>{children}</InvestmentProvider>
    </AuthProvider>
  );
};
export default Providers;
