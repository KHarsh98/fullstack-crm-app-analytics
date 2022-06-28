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

function UpdateCustomer(props) {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: props.customer.name,
      email: props.customer.email,
      phone: props.customer.phone,
    },
  });

  const onSubmit = async (data) => {
    console.log(data, JSON.stringify(data));
    const requestUrl = API_URL + `/customers/${props.customer.id}/`;
    const request = new Request(requestUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
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
    props.setUpdateDialogOpen(false);
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
          {`Update Customer: ${props.customer.name}`}
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
                minLength: {
                  value: 10,
                  message: "Phone Number must be at least 10 characters",
                },
                maxLength: {
                  value: 13,
                  message: "Phone Number must be at most 13 characters",
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

export default UpdateCustomer;
