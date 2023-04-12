import React from "react";
import SideNav from "./SideNav";
import logo from "../../assets/klasha__logo.svg";
import { Avatar, Button } from "@mui/material";
import styles from "./LogoNavLogout.module.css";
import supportIcon from "../../assets/support.svg";
import FilledBtn from "../sharedComponents/FilledBtn";
import OutlinedBtn from "../sharedComponents/OutlinedBtn";
import arrowLeft from "../../assets/arrow-left.svg";

const LogoNavLogout = () => {
  return (
    <aside className={styles.aside}>
      <Avatar variant="square" className={styles.avatar} src={logo} />
      <SideNav />
      <div className={styles.nav_bottom_btn_cover}>
        <FilledBtn
          label="Suppor"
          icon={supportIcon}
          color="rgba(239, 44, 90, 1)"
        />
        <OutlinedBtn label="Hide panel" icon={arrowLeft} />
      </div>
    </aside>
  );
};

export default LogoNavLogout;
