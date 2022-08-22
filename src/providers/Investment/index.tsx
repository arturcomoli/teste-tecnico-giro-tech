import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SimulationData } from "../../pages/Home/home.interfaces";
import api from "../../services";
import { simulateInvestment } from "../../utils";
import {
  InvestmentContextData,
  InvestmentProviderProps,
  SelicProps,
  SimulationProps,
} from "./investment.interfaces";

export const InvestmentContext = createContext<InvestmentContextData>(
  {} as InvestmentContextData
);

export const InvestmentProvider = ({ children }: InvestmentProviderProps) => {
  const navigate = useNavigate();

  const [selic, setSelic] = useState<SelicProps>({} as SelicProps);
  const [simulation, setSimulation] = useState<SimulationProps>(
    {} as SimulationProps
  );
  const [loading, setLoading] = useState<boolean>(false);

  const getSelic = () => {
    setLoading(true);
    api
      .get("/taxas/v1")
      .then((res) => {
        const selic = res.data.find(
          (item: SelicProps) => item.nome === "Selic"
        );
        setSelic(selic);
        setLoading(false);
      })
      .catch((_) => setLoading(false));
  };

  // useEffect(() => {
  //   getSelic();
  // }, []);

  const submitSimulation = (data: SimulationData) => {
    const { period, value } = data;
    const { valor } = selic;

    const investment = simulateInvestment({ selic: valor, value, period });

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
      value={{
        selic,
        submitSimulation,
        simulation,
        normalizeStates,
        loading,
        getSelic,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
};

export const useInvestment = () => useContext(InvestmentContext);
