import React, { useState } from "react";
import NavLinks from "../components/NavLinks";
import styles from "./navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

function Mobile() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={styles.mobileNavigation}>
      {sidebar ? (
        <ClearIcon
          onClick={() => setSidebar(!sidebar)}
          className={styles.menuIcon}
        />
      ) : (
        <MenuIcon
          onClick={() => setSidebar(!sidebar)}
          className={styles.menuIcon}
        />
      )}
      {sidebar && <NavLinks />}
    </div>
  );
}

export default Mobile;
