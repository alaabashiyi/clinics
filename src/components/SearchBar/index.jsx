import React, { useContext } from "react";
import { globalContext } from "../../context/context";
import useStyles from "./styles";
import { Paper, InputBase, IconButton, Button } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

function SearchBar({ filterData }) {
  const { search, setSearch } = useContext(globalContext);
  const styles = useStyles();
  return (
    <>
      <div className={styles.searchContainer}>
        <Paper component="form" className={styles.searchBar}>
          <InputBase
            placeholder="Search by city, state or country"
            className={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <IconButton aria-label="search" onClick={() => filterData(search)}>
            <SearchIcon className={styles.searchIcon} />
          </IconButton>
        </Paper>
        <Button
          className={styles.searchButton}
          onClick={() => filterData(search)}
        >
          Search
        </Button>
      </div>
    </>
  );
}

export default SearchBar;
