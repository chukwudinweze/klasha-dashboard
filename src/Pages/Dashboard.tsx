import React from "react";
import Header from "../components/Header/Header";
import SalesOverview from "../components/salesOverview/SalesOverview";
import LogoNavLogout from "../components/sideNav/LogoNavLogout";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ border: "1px solid red" }}>
        <Header />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <LogoNavLogout />
          <SalesOverview />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
