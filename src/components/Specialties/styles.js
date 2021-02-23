import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    color: "#545870",
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    paddingLeft: 40,
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    display: "flex",
  },
});

export default useStyles;
