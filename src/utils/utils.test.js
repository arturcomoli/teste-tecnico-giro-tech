// import { unmountComponentAtNode } from "react-dom";

import { simulateInvestment } from ".";

// let container = null;

// beforeEach(() => {
//   container.document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

test("Returns right value to investment function", () => {
  const object = { Selic: "13.75", value: "1000", period: "10" };

  const investment = simulateInvestment(object);

  expect(investment).toBe(1114.58);
});
