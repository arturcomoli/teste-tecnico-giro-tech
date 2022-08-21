import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SimulationData } from "../../pages/Home/home.interfaces";
import { simulateInvestment } from "../../utils";
import {
  InvestmentContextData,
  InvestmentProviderProps,
} from "./investment.interfaces";

const InvestmentContext = createContext<InvestmentContextData>(
  {} as InvestmentContextData
);

export const InvestmentProvider = ({ children }: InvestmentProviderProps) => {
  const navigate = useNavigate();
  const [selic, setSelic] = useState<string>("");
  const [simulation, setSimulation] = useState<number>(0);

  //   useEffect(() => {

  //     fetch("https://brasilapi.com.br/api/taxas/v1/Selic", {
  //       mode: "no-cors",
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => setSelic(res))
  //       .catch((err) => console.log(err));
  //   }, []);

  console.log(selic);

  const submitSimulation = (data: SimulationData) => {
    const { period, value } = data;
    const investment = simulateInvestment({ selic, value, period });

    setSimulation(investment);
    navigate("/result");
  };

  return (
    <InvestmentContext.Provider value={{ selic, submitSimulation, simulation }}>
      {children}
    </InvestmentContext.Provider>
  );
};

export const useInvestment = () => useContext(InvestmentContext);
