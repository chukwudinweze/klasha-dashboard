import Box from "@mui/material/Box";
import navItems from "./SideNavContents";
import SideNavItem from "./SideNavItem";
import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <Box
      className={styles.nav}
      component="nav"
      //   display={{ xs: "none", sm: "none", lg: "block" }}
    >
      {navItems.map((navItem, index) => {
        const { contents, section } = navItem;
        return (
          <div key={index}>
            <p className={styles.nav_section}>{section && section}</p>
            {contents.map((content, index) => {
              return <SideNavItem key={index} {...content} />;
            })}
          </div>
        );
      })}
    </Box>
  );
};

export default SideNav;
