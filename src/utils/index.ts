import { SimulateInvestmentParams } from "./utils.interfaces";

export const simulateInvestment = ({
  selic,
  value,
  period,
}: SimulateInvestmentParams): number => {
  const selicByMonth = Number(selic) / (12 * 100);

  const investment = Number(value) * selicByMonth * Number(period);
  const total = investment + Number(value);

  return +total.toFixed(2);
};
