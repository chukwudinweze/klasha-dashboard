import React from "react";
import styles from "./SaleSummaryChats.module.css";
import { SaleSummary } from "./SaleSummary";

const SaleSummaryChats = () => {
  return (
    <div className={styles.sale_summary_chats}>
      <SaleSummary dailyChart={true} darkTheme={false} />
      <SaleSummary dailyChart={false} darkTheme={true} />
      <SaleSummary dailyChart={false} darkTheme={false} />
      <SaleSummary dailyChart={false} darkTheme={false} />
    </div>
  );
};

export default SaleSummaryChats;
