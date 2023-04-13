import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options } from "./options";
import { data } from "./data";
import styles from "./ChartOverview.module.css";
import ChartHeader from "./ChartHeader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function ChartOverview() {
  return (
    <div className={styles.chart_overview}>
      <ChartHeader />
      <div className={styles.area_chart}>
        <Line id="chart" options={options} data={data} />
      </div>
    </div>
  );
}
