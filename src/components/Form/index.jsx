import React, { useContext } from "react";
import {
  Grid,
  Typography,
  InputBase,
  Button,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import { globalContext } from "../../context/context";
const imgUrl = `https://randomuser.me/api/portraits/women/45.jpg`;

const Form = React.forwardRef((props, ref) => {
  const {
    currentClinic: { data },
  } = useContext(globalContext);

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2} className={styles.imgGrid}>
          <img src={imgUrl} alt="img" className={styles.img} />
        </Grid>
        <Grid item xs className={styles.title}>
          <Typography gutterBottom variant="h5" align="left" color="inherit">
            Send a message to {`${data.firstName} ${data.lastName}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5} className={styles.form}>
          <InputBase placeholder="Your name" className={styles.input} />
          <InputBase placeholder="Your email" className={styles.input} />
          <InputBase placeholder="Your phone" className={styles.input} />
          <InputBase
            placeholder="Message (up to 200 words)"
            className={styles.textField}
          />

          <Button className={styles.sendButton}>Send Message</Button>
        </Grid>
        <Grid item xs className={styles.title2}>
          <Typography
            gutterBottom
            variant="subtitle1"
            align="left"
            color="inherit"
            className={styles.note}
          >
            Don't be shy.
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            align="left"
            color="inherit"
            className={styles.note}
          >
            Our Myndlift providers are here to help you and are pleased to hear
            from you.
            <br />
            <br />
            Feel free to ask what you want but keep it short,200 words or less,
            this is just an initial contact.
            <br />
            <br />
            Remember to double check your email and phone number.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
});

export default Form;
