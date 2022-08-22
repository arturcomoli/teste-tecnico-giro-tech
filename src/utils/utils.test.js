// import { unmountComponentAtNode } from "react-dom";

import { simulateInvestment } from ".";

test("Returns right value to investment function", () => {
  const object = { selic: "13.75", value: "1000", period: "10" };

  const investment = simulateInvestment(object);

  expect(investment).toBe(1114.58);
});
