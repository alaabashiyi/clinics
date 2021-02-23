import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import SearchBar from "../../components/SearchBar";
import useStyles from "./styles";
import CardList from "../../components/CardList";

function Home(props) {
  const [search, setSearch] = useState("");
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Container className={styles.container}>
        <Typography variant="h1" component="h2" className={styles.header}>
          Nearby Myndlift Providers
        </Typography>
        <SearchBar
          filterData={props.filterData}
          search={search}
          setSearch={setSearch}
        />
        <Typography
          variant="subtitle2"
          align="left"
          className={styles.resultsHeader}
        >
          {props.data.length > 0
            ? `Showing ${props.data.length} results for "${search}"`
            : `No results for ""`}
        </Typography>
        {props.data && <CardList {...props} />}
      </Container>
    </div>
  );
}

export default Home;
