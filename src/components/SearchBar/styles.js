import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  searchBar: {
    display: "flex",
    marginBottom: 40,
    marginRight: 20,
    width: "70%",
    borderRadius: 25,
    boxShadow: "1px 2px 10px #9E9E9E",
  },
  input: {
    paddingLeft: 70,
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchIcon: {
    fontSize: 35,
    color: "#78ddd0",
  },
  searchButton: {
    backgroundColor: "#78ddd0",
    height: 60,
    width: 120,
    borderRadius: 35,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
    boxShadow: "1px 2px 10px #9E9E9E",
  },
});

export default useStyles;
