import React from "react";
import useStyles from "./styles";
import { Modal } from "@material-ui/core";
import Form from "../Form";

const FormOverlay = React.forwardRef((props, ref) => {
  const { open = false, handleClose } = props;
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Modal className={styles.modal} open={open} onClose={handleClose}>
        <Form {...props} ref={ref} />
      </Modal>
    </div>
  );
});

export default FormOverlay;
