import { Avatar } from "@mui/material";
import userIcon from "../../assets/user-icon.svg";
import arrowDown from "../../assets/arrow-down.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.user}>
        <Avatar
          src={userIcon}
          alt="user"
          sx={{ maxWidth: "32px", maxHeight: "32px" }}
          variant="square"
        />
        <Avatar
          src={arrowDown}
          alt="user"
          variant="square"
          sx={{ maxWidth: "12px", maxHeight: "6px" }}
        />
      </div>
      <div className={styles.chaneLang}>
        <p className={styles.lang}>En</p>
        <Avatar
          variant="square"
          src={arrowDown}
          alt="change language"
          sx={{ maxWidth: "12px", maxHeight: "6px" }}
        />
      </div>
    </div>
  );
};

export default Header;
