import { ReactNode } from "react";
import { SimulationData } from "../../pages/Home/home.interfaces";

export interface InvestmentContextData {
  selic: string;
  simulation: number;
  submitSimulation: (data: SimulationData) => void;
}

export interface InvestmentProviderProps {
  children: ReactNode;
}
