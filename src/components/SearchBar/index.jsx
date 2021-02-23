import React from "react";
import useStyles from "./styles";
import { Paper, InputBase, IconButton, Button } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

function SearchBar({ search, setSearch, filterData }) {
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
