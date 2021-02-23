import React from "react";
import logo from "../../assets/images/logo.png";
import useStyles from "./styles";

function TopBar() {
  const styles = useStyles();
  return (
    <div className={styles.top}>
      <img src={logo} alt="img" className={styles.img} />
    </div>
  );
}

export default TopBar;
