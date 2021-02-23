import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

function SpecialtyItem({ title }) {
  const styles = useStyles();
  return (
    <Typography
      gutterBottom
      variant="subtitle1"
      align="center"
      color="inherit"
      className={styles.special}
    >
      {title}
    </Typography>
  );
}

export default SpecialtyItem;
