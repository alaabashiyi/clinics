import React from "react";
import SpecialtyItem from "../SpecialtyItem";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";

function Specialties({ data, title }) {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography
            gutterBottom
            variant="subtitle1"
            align="left"
            color="inherit"
            className={styles.title}
          >
            {title}:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.row}>
            {React.Children.toArray(
              data.map((item) => <SpecialtyItem title={item} />)
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Specialties;
