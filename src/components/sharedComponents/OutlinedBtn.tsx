import { Avatar, Button } from "@mui/material";
import styles from "./FilledBtn.module.css";

interface propType {
  label: string;
  icon: string;
}

const OutlinedBtn = ({ label, icon }: propType) => {
  return (
    <Button
      className={styles.outlineBtn}
      variant="outlined"
      startIcon={
        <Avatar src={icon} sx={{ width: ".313rem", height: ".625rem" }} />
      }
    >
      {label}
    </Button>
  );
};

export default OutlinedBtn;
