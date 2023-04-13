import React from "react";
import TransactionHistory from "../components/transactionHistory/TransactionHistory";
import Header from "../components/Header/Header";
import LogoNavLogout from "../components/sideNav/LogoNavLogout";
import styles from "./TxnHistoryPage.module.css";
import { motion } from "framer-motion";

const TxnHistory = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Header />
        <div className={styles.history_page}>
          <LogoNavLogout />
          <TransactionHistory />
        </div>
      </div>
    </motion.div>
  );
};

export default TxnHistory;
