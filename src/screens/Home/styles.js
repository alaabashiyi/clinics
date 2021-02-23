import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    width: "100%",
    height: "100%",
    textAlign: "center",
    paddingBottom: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 60,
    letterSpacing: 1,
    fontSize: 40,
    fontWeight: "bold",
    color: "#575b72",
  },
  resultsHeader: {
    width: "83%",
    fontWeight: "bold",
    fontSize: 25,
    color: "#575b72",
  },
});

export default useStyles;
