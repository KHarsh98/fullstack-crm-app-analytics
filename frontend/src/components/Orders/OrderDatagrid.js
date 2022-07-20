import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";

import React from 'react'
import { Box, Paper, Stack } from "@mui/material";
import orderStatuses from "constants/ORDER_STATUS";

function OrderDatagrid({ orders }) {
    return (
        <Box sx={{ height: 400, width: "50%" }} component={Paper}>
            <Stack flexDirection="row" style={{ height: "100%" }}>
                <Box component="div" style={{ flexGrow: 1 }}>
                    <DataGrid
                        columns={[
                            {
                                field: "order_number",
                                minWidth: 200,
                                headerName: "Order Number",
                            },
                            {
                                field: "date_created",
                                minWidth: 300,
                                headerName: "Date of Order",
                            },
                            {
                                field: "status",
                                minWidth: 200,
                                headerName: "Status",
                                valueOptions: orderStatuses,
                            },
                            {
                                field: "actions",
                                type: "actions",
                                headerName: "Actions",
                                minWidth: 150,
                                getActions: (params) => [
                                    <GridActionsCellItem
                                        icon={<Delete />}
                                        label="Delete"
                                    // onClick={deleteUser(params.id)}
                                    />,
                                    <GridActionsCellItem
                                        icon={<Edit />}
                                        label="Edit"
                                    // onClick={toggleAdmin(params.id)}
                                    />,
                                ],
                            },
                        ]}
                        rows={[...orders]}
                        components={{
                            Toolbar: GridToolbar,
                        }}
                        componentsProps={{
                            toolbar: { showQuickFilter: true },
                        }}
                        rowsPerPageOptions={[100, 25, 50, 10]}
                    />
                </Box>
            </Stack>
        </Box>
    )
}

export default OrderDatagrid