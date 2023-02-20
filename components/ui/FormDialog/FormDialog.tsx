import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BalanceContext } from "@/contexts/BalanceContext/BalanceContext";
import balanceActions from "@/domain/reducers/actions/balanceActions";

interface IProps {
  label: string;
}

export default function FormDialog({ label }: IProps) {
  const [open, setOpen] = React.useState(false);
  const { dispatch } = React.useContext(BalanceContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addElementHandler = () => {
    dispatch({
      type: balanceActions.add,
      element: {
        name: "test",
        id: "1",
        date: "03-01-2202",
        amount: 10.42,
      },
    });
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>{label}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nazwa"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="Kwota"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            id="date"
            label="Data"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuluj</Button>
          <Button onClick={addElementHandler}>Dodaj</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
