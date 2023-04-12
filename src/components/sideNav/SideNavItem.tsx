import Avatar from "@mui/material/Avatar";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideNavItem.module.css";

const SideNavItem: React.FC<{ icon: string; label: string; link: string }> = ({
  icon,
  label,
  link,
}) => {
  return (
    // <NavLink to="#" className={({ isActive }) => (isActive ? "active" : "")}>
    <div className={styles.navItem}>
      <Avatar
        //   className="icon"
        src={icon && icon}
        alt={label}
        sx={{ width: "16px", height: "12.8px", color: "red" }}
      />
      <p>{label && label}</p>
    </div>
    // </NavLink>
  );
};

export default SideNavItem;
