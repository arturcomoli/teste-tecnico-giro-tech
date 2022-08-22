import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SimulationData } from "../../pages/Home/home.interfaces";
import { simulateInvestment } from "../../utils";
import {
  InvestmentContextData,
  InvestmentProviderProps,
  SelicProps,
  SimulationProps,
} from "./investment.interfaces";

const InvestmentContext = createContext<InvestmentContextData>(
  {} as InvestmentContextData
);

export const InvestmentProvider = ({ children }: InvestmentProviderProps) => {
  const navigate = useNavigate();
  const [selic, setSelic] = useState<SelicProps>({ Selic: "" } as SelicProps);
  const [simulation, setSimulation] = useState<SimulationProps>(
    {} as SimulationProps
  );

  useEffect(() => {
    fetch("https://brasilapi.com.br/api/taxas/v1/Selic", {
      mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setSelic(res))
      .catch((err) => console.log(err));
  }, []);

  const submitSimulation = (data: SimulationData) => {
    const { period, value } = data;
    const { Selic } = selic;

    const investment = simulateInvestment({ Selic, value, period });

    setSimulation({ value, period, investment });
    toast.success("Simulação enviada");
    navigate("/result");
  };

  const normalizeStates = () => {
    setSimulation({} as SimulationProps);
    setSelic({} as SelicProps);
  };

  return (
    <InvestmentContext.Provider
      value={{ selic, submitSimulation, simulation, normalizeStates }}
    >
      {children}
    </InvestmentContext.Provider>
  );
};

export const useInvestment = () => useContext(InvestmentContext);
