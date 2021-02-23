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
    width: "80%",
    boxShadow: "1px 2px 10px #9E9E9E",
    marginLeft: 80,
    marginRight: 80,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  title: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    color: "#545870",
  },
  title2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "#545870",
  },
  note: {
    paddingLeft: 60,
    paddingRight: 60,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 70,
  },

  input: {
    width: "100%",
    borderRadius: 25,
    marginTop: 15,
    boxShadow: "1px 2px 10px #78ddd0",
    paddingLeft: 40,

    height: 50,
    fontSize: 18,
    fontWeight: "bold",
  },
  textField: {
    width: "100%",
    borderRadius: 50,
    marginTop: 15,
    boxShadow: "1px 2px 10px #78ddd0",
    paddingLeft: 40,
    paddingTop: 10,
    height: 150,
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  sendButton: {
    backgroundColor: "#78ddd0",
    height: 70,
    width: "100%",
    marginTop: 15,
    borderRadius: 35,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
    boxShadow: "1px 2px 10px #9E9E9E",
  },
});

export default useStyles;
