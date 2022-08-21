import { SimulateInvestmentParams } from "./utils.interfaces";

export const simulateInvestment = ({
  selic,
  value,
  period,
}: SimulateInvestmentParams): number => {
  const selicByMonth = Number(selic) / 12;
  const investment = Number(value) * selicByMonth * Number(period);

  return investment + Number(value);
};
