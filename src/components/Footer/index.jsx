import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

function Footer() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Container className={styles.footer}>
        <Typography variant="h4" align="left" className={styles.footerTitle}>
          You don't see a provider near you?
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
