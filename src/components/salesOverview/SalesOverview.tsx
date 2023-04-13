import React from "react";
import styles from "./SalesOverview.module.css";
import SaleSummaryChats from "./saleSummaryChat/SaleSummaryChats";
import ChatrtAndWireBox from "./mainChartOverview/ChatrtAndWireBox";

const SalesOverview = () => {
  return (
    <div className={styles.overview}>
      <SaleSummaryChats />
      <ChatrtAndWireBox />
    </div>
  );
};

export default SalesOverview;
