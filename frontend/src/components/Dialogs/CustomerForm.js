import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { API_URL } from "constants/constants";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

function CustomerForm(props) {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: props.customer
      ? {
        name: props.customer.name,
        email: props.customer.email,
        phone: props.customer.phone,
      }
      : {
        name: "",
        email: "",
        phone: "",
      },
  });

  const onSubmit = async (data) => {
    console.log(data, JSON.stringify(data));
    let request;

    if (props.customer) {
      const requestUrl = API_URL + `/customers/${props.customer.id}/`;

      request = new Request(requestUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      const requestUrl = API_URL + "/customers/";
      request = new Request(requestUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    try {
      const response = await fetch(request);

      if (response.ok) {
        // TODO: show success message
        console.info("Succesfully updated", response.body);
      }
    } catch (err) {
      // TODO: show error message
      console.error("error", err);
    } finally {
      handleClose();
      navigate(0);
    }
  };
  const handleClose = () => {
    if (props.setUpdateDialogOpen) props.setUpdateDialogOpen(false);
    if (props.setcreateCustomerDialog) props.setcreateCustomerDialog(false);
  };
  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="update-customer-alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <DialogTitle id="update-customer-alert-dialog-title">
          {props.customer
            ? `Update Customer: ${props.customer.name}`
            : "Create new customer"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} mt={3}>
            <Controller
              name="name"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  error={errors.name ? true : false}
                  required
                />
              )}
              control={control}
              rules={{ required: true, min: 1 }}
            />
            <Controller
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                  required
                />
              )}
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              }}
              control={control}
            />
            <Controller
              name="phone"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone Number"
                  helperText={errors.phone?.message}
                  error={errors.phone ? true : false}
                  required
                />
              )}
              rules={{
                required: true,
                pattern: {
                  value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: "Please enter a valid phone number",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 characters",
                },
                maxLength: {
                  value: 13,
                  message: "Phone number must be at most 13 characters",
                },
              }}
              control={control}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            size="large"
          >
            Cancel
          </Button>
          <LoadingButton
            type="submit"
            variant="contained"
            autoFocus
            size="large"
          >
            Submit
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CustomerForm;
