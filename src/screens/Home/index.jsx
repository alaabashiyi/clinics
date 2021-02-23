import React, { useContext } from "react";
import { globalContext } from "../../context/context";
import { Container, Typography } from "@material-ui/core";
import SearchBar from "../../components/SearchBar";
import useStyles from "./styles";
import CardList from "../../components/CardList";
import FormOverlay from "../../components/FormOverlay";

const Home = (props) => {
  const { open, setOpen, search, filterData, data } = useContext(globalContext);
  const handleClose = () => setOpen(false);

  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Container className={styles.container}>
        <Typography variant="h1" component="h2" className={styles.header}>
          Nearby Myndlift Providers
        </Typography>
        <SearchBar filterData={filterData} />
        <Typography
          variant="subtitle2"
          align="left"
          className={styles.resultsHeader}
        >
          {data.length > 0
            ? `Showing ${data.length} results for "${search}"`
            : `No results for ""`}
        </Typography>
        {data && <CardList {...props} data={data} />}
      </Container>
      <FormOverlay open={open} handleClose={handleClose} />
    </div>
  );
};

export default Home;
