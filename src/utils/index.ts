import { SimulateInvestmentParams } from "./utils.interfaces";

export const simulateInvestment = ({
  Selic,
  value,
  period,
}: SimulateInvestmentParams): number => {
  const selicByMonth = Number(Selic) / (12 * 100);

  const investment = Number(value) * selicByMonth * Number(period);
  const total = investment + Number(value);

  return +total.toFixed(2);
};
