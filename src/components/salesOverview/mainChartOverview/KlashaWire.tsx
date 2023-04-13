import React from "react";
import styles from "./KlashaWire.module.css";

const KlashaWire = () => {
  return (
    <div className={styles.klasha_wire}>
      <p className={styles.klasha_wire_p}>
        KlashaWire - send money to businesses globally from Africa
      </p>
      <button className={styles.klasha_wire_btn}>Send a Wire</button>
    </div>
  );
};
export default KlashaWire;
