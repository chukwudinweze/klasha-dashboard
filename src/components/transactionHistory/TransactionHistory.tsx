import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./TransactionHistory.module.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import TransactionTable from "./TransactionTable";
import { Pagination } from "@mui/material";

const TransactionHistory = () => {
  return (
    <div className={styles.table_history_header}>
      <h6 className={styles.header}>Transaction History</h6>
      <div className={styles.search_history_column}>
        <div className={styles.search_history}>
          <input placeholder="Search" type="search" name="" id="" />
          <SearchIcon />
        </div>
        <div className={styles.table_filter}>
          <button>
            <p>Filter</p> <FilterListIcon />
          </button>
          <button>Export</button>
        </div>
      </div>
      <TransactionTable />
      <div className={styles.pagination}>
        <Pagination
          sx={{ border: "1px solid rgba(240, 240, 240, 1)" }}
          count={10}
        />
      </div>
    </div>
  );
};

export default TransactionHistory;
