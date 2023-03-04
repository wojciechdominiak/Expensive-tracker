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

  const [name, setName] = React.useState<string>("");
  const [amount, setAmount] = React.useState<number>(0);
  const [date, setDate] = React.useState<string>("");

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
        name: name,
        id: Math.random().toString(),
        date: date,
        amount: amount,
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
            onChange={(e) => setName(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Nazwa"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(e) => setAmount(+e.target.value)}
            autoFocus
            margin="dense"
            id="amount"
            label="Kwota"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(e) => setDate(e.target.value)}
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
