import { ReactNode } from "react";
import { SimulationData } from "../../pages/Home/home.interfaces";

export interface SimulationProps {
  value: string;
  period: string;
  investment: number;
}

export interface SelicProps {
  nome: string;
  valor: number;
}
export interface InvestmentContextData {
  selic: SelicProps;
  simulation: SimulationProps;
  loading: boolean;
  submitSimulation: (data: SimulationData) => void;
  normalizeStates: () => void;
  getSelic: () => void;
}

export interface InvestmentProviderProps {
  children: ReactNode;
}
