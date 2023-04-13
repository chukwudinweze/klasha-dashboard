import React from "react";
import styles from "./ChartHeader.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ChartHeader = () => {
  return (
    <div className={styles.chart_header}>
      <p>Sales</p>
      <p>7 days</p>
      <p>30 days</p>
      <select className={styles.select_currency} name="USD" id="">
        <option value="usd">USD</option>
      </select>
      <select className={styles.select_email} name="USD" id="">
        <option value="usd">Email</option>
      </select>
      <button>
        <ArrowDownwardIcon sx={{ fontSize: "16px" }} /> Download report
      </button>
    </div>
  );
};

export default ChartHeader;
