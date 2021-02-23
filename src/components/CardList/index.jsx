import React from "react";
import Card from "../Card";
import useStyles from "./styles";
import { CircularProgress } from "@material-ui/core";

function CardList(props) {
  const styles = useStyles();
  if (!props.data) return <CircularProgress color="secondary" />;
  return (
    <div className={styles.cards}>
      {React.Children.toArray(
        props.data.map((item) => <Card data={item.listings} />)
      )}
    </div>
  );
}

export default CardList;
