import { LoadingButton } from "@mui/lab";
import {
    Autocomplete,
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
import ORDER_STATUS from "../../constants/ORDER_STATUS";

function OrderForm(props) {
    const navigate = useNavigate();
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: props.order
            ? {
                orderNumber: props.order.order_number,
                status: props.order.status,
                customer: props.order.customer,
                products: props.order.products,
            }
            : {
                orderNumber: "",
                status: "",
                customer: "",
                products: "",
            },
    });

    const onSubmit = async (data) => {
        console.log(data, JSON.stringify(data));
        let request;

        if (props.customer) {
            const requestUrl = API_URL + `/orders/${props.customer.id}/`;

            request = new Request(requestUrl, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } else {
            const requestUrl = API_URL + "/orders/";
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
        if (props.setopenOrderForm) props.setopenOrderForm(false);
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
                    {props.order
                        ? `Update Order: ${props.order.order_number}`
                        : "Create new order"}
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={3} mt={3}>
                        <Controller
                            name="orderNumber"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Order Number"
                                    error={errors.orderNumber ? true : false}
                                    required
                                />
                            )}
                            control={control}
                            rules={{ required: true, min: 1 }}
                        />
                        <Controller
                            name="status"
                            render={({ field }) => (
                                <Autocomplete
                                    id="combo-box-customers"
                                    options={Object.values(ORDER_STATUS)}
                                    renderInput={(params) => <TextField {...params} label="Status" required />}
                                />
                            )}
                            rules={{ required: true }}

                            control={control}
                        />
                        <Controller
                            name="customer"
                            render={({ field }) => (
                                // TODO: this should be a list of customers
                                <Autocomplete
                                    id="combo-box-customers"
                                    options={props.customers.map((customer) => customer.name)}
                                    renderInput={(params) => <TextField {...params} label="Select Customer" required />}
                                />
                            )}
                            rules={{ required: true }}

                            control={control}
                        />
                        <Controller
                            name="products"
                            render={({ field }) => (
                                // TODO: this should be a list of products
                                <Autocomplete
                                    id="combo-box-products"
                                    multiple
                                    options={props.products.map((product) => product.name)}
                                    renderInput={(params) => <TextField {...params} label="Select Products" required />}
                                />
                            )}
                            rules={{ required: true }}
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

export default OrderForm;
