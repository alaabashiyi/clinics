import React, { useState, useContext, useEffect } from "react";
import Specialties from "../Specialties";
import { Grid, Typography, Button, Collapse } from "@material-ui/core";
import useStyles from "./styles";
import { globalContext } from "../../context/context";
const imgUrl = `https://randomuser.me/api/portraits/women/45.jpg`;

function Card({ data }) {
  const {
    firstName,
    lastName,
    city,
    country,
    address,
    biography,
    topSpecialties,
    otherSpecialties,
    languages,
    clinicName,
  } = data[Object.keys(data)[0]];

  const { setCurrentClinic, setOpen } = useContext(globalContext);

  const [seeMore, setSeeMore] = useState(false);

  const styles = useStyles();

  useEffect(() => {
    setCurrentClinic({ data: null, isLoading: true });
  }, [setCurrentClinic]);

  const handleMessage = () => {
    setCurrentClinic({ data: data[Object.keys(data)[0]], isLoading: false });
    setOpen(true);
  };

  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <img src={imgUrl} alt="img" className={styles.img} />
        </Grid>
        <Grid item xs={6} className={styles.content}>
          <Typography gutterBottom variant="h5" align="left" color="inherit">
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            align="left"
            color="inherit"
          >
            {clinicName}
          </Typography>
          <Collapse in={seeMore}>
            <Typography
              gutterBottom
              variant="body2"
              align="left"
              color="inherit"
              onClick={() => setSeeMore(!seeMore)}
            >
              {biography}
            </Typography>
          </Collapse>
          <Collapse in={!seeMore}>
            <Typography
              gutterBottom
              variant="body2"
              align="left"
              color="inherit"
              onClick={() => setSeeMore(!seeMore)}
            >
              {`${biography.slice(0, 150)}...`}
            </Typography>
          </Collapse>
        </Grid>
        <Grid item xs={3}>
          <Typography
            gutterBottom
            variant="subtitle2"
            align="right"
            color="inherit"
            className={styles.address}
          >
            {address}
          </Typography>

          <Typography
            gutterBottom
            variant="subtitle2"
            align="right"
            color="inherit"
            className={styles.address}
          >
            {`${city}, ${country}`}
          </Typography>
        </Grid>
        <div className={styles.btns}>
          <Specialties data={topSpecialties} title={"Specialties"} />

          <Collapse in={seeMore}>
            <Specialties data={otherSpecialties} title={"More Specialties"} />
            <Specialties data={languages} title={"Languages"} />
          </Collapse>
        </div>
        <Grid item xs={3}>
          <Button
            onClick={() => setSeeMore(!seeMore)}
            className={styles.viewBtn}
          >
            {!seeMore ? `View Profile` : `Hide Profile`}
          </Button>
          <Button onClick={handleMessage} className={styles.sendBtn}>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card;
