import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 25,
    width: "81%",
    boxShadow: "1px 2px 10px #9E9E9E",
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 25,
  },
  content: {
    color: "#545870",
  },
  address: {
    width: "80%",
    color: "#545870",
  },
  viewBtn: {
    borderRadius: 35,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    fontWeight: "bold",
    color: "#78ddd0",
  },
  sendBtn: {
    backgroundColor: "#78ddd0",
    borderRadius: 35,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    boxShadow: "1px 2px 10px #9E9E9E",
    marginTop: 15,
  },
  btns: { display: "flex", flexDirection: "column", width: "74%" },
});

export default useStyles;
