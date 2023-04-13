import { Chart } from "chart.js";
import React from "react";
import { ChartOverview } from "./ChartOverview";
import KlashaWire from "./KlashaWire";
import styles from "./ChatrtAndWireBox.module.css";

const ChatrtAndWireBox = () => {
  return (
    <div className={styles.chart_and_wirebox}>
      <ChartOverview />
      <KlashaWire />
    </div>
  );
};

export default ChatrtAndWireBox;
