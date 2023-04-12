import { Avatar, Button } from "@mui/material";
import styles from "./FilledBtn.module.css";

interface propType {
  label: string;
  icon: string;
  color: string;
}

const FilledBtn = ({ label, icon, color }: propType) => {
  return (
    <Button
      sx={{ background: color }}
      className={styles.filledbtn}
      variant="contained"
      startIcon={<Avatar src={icon} sx={{ width: "20px", height: "20px" }} />}
    >
      {label}
    </Button>
  );
};

export default FilledBtn;
