import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { API_URL } from "constants/constants";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeleteCustomer(props) {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    props.setDeleteDialogOpen(false);
  };
  const handleConfirm = async () => {
    setloading(true);
    const { id } = props.customer;
    const request = API_URL + `/customers/${id}`;
    try {
      const response = await fetch(request, {
        method: "DELETE",
      });
      if (response.status === 204) {
        //TODO: Show success message
        console.log("Successfully deleted!");
      }
    } catch (err) {
      // TODO: Show error message
      console.error(err);
    } finally {
      setloading(false);
      handleClose();
      navigate(-1);
    }
  };
  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="delete-customer-alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="delete-customer-alert-dialog-title">
        {`Are you sure you want to delete ${props.customer.name}?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-customer-alert-dialog-description">
          Deleting the customer will remove all orders and customer data. This
          action is irreversible.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <LoadingButton
          variant="contained"
          loading={loading}
          onClick={handleConfirm}
          autoFocus
        >
          Confirm
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteCustomer;
