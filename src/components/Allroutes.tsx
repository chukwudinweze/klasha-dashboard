import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import PageNotFound from "../Pages/PageNotFound";
import TxnHistory from "../Pages/TxnHistoryPage";

const Allroutes = () => {
  const location = useLocation();
  const [delayedLocation, setDelayedLocation] = useState(location);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedLocation(location);
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [location]);
  return (
    <AnimatePresence initial={false}>
      <Routes location={delayedLocation} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<TxnHistory />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Allroutes;
