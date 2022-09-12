import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useStyles } from "./ConfirmDialog-style";

const ConfirmDialog = (props) => {
  const classes = useStyles();
  const { title, children, open, setOpen, onConfirm } = props;
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
      className={classes.dialog}
    >
      <DialogTitle id="confirm-dialog" className={classes.title}>{title}</DialogTitle>
      <DialogContent className={classes.content}>{children}</DialogContent>
      <DialogActions className={classes.buttons}>
        <Button
          variant="text"
          color="inherit"
          size="large"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;