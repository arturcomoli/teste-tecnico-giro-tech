import { ReactNode } from "react";
import { SimulationData } from "../../pages/Home/home.interfaces";

export interface SimulationProps {
  value: string;
  period: string;
  investment: number;
}

export interface SelicProps {
  Selic: string;
}
export interface InvestmentContextData {
  selic: SelicProps;
  simulation: SimulationProps;
  submitSimulation: (data: SimulationData) => void;
  normalizeStates: () => void;
}

export interface InvestmentProviderProps {
  children: ReactNode;
}
