import { ScriptableContext } from "chart.js";
import { faker } from "@faker-js/faker";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];

export const data = {
  labels,

  datasets: [
    {
      fill: true,
      labels,
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 4000 })),
      pointStyle: "circle",
      pointRadius: 0,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 50);
        gradient.addColorStop(0, "rgba(239, 44, 90, 1)");
        gradient.addColorStop(1, "rgba(239, 44, 90, 0)");
        return gradient;
      },
      borderColor: "rgba(239, 44, 90, 1)",
      borderWidth: 1,
    },
  ],
};
