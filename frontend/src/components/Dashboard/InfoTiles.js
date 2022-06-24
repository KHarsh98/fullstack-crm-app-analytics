import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  CardHeader,
} from "@mui/material";

import "./Dashboard.scss";

function InfoTiles({ orders }) {
  const totalOrders = orders.length;
  const ordersDelivered = orders.filter(
    (order) => order.status === "Delivered"
  ).length;
  const ordersPending = orders.filter(
    (order) => order.status === "Pending"
  ).length;
  return (
    <Stack direction="row" spacing={4} justifyContent="space-between">
      <Card
        sx={{
          boxShadow: 6,
        }}
        className="infoTitleCard"
        id="total-orders"
      >
        <CardHeader
          title="Total Orders"
          titleTypographyProps={{
            color: "common.white",
            align: "center",
            variant: "h4",
          }}
        />

        <Divider />
        <CardContent>
          <Typography
            variant="h3"
            component="div"
            align="center"
            color="common.white"
            padding={3}
          >
            {totalOrders}
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          boxShadow: 6,
        }}
        className="infoTitleCard"
        id="orders-pending"
      >
        <CardHeader
          title="Orders Pending"
          titleTypographyProps={{
            color: "common.white",
            align: "center",
            variant: "h4",
          }}
        />

        <Divider />
        <CardContent>
          <Typography
            variant="h3"
            component="div"
            align="center"
            color="common.white"
            padding={3}
          >
            {ordersPending}
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          boxShadow: 6,
        }}
        className="infoTitleCard"
        id="orders-delivered"
      >
        <CardHeader
          title="Orders Delivered"
          titleTypographyProps={{
            color: "common.white",
            align: "center",
            variant: "h4",
          }}
        />
        <Divider />
        <CardContent>
          <Typography
            color="common.white"
            variant="h3"
            component="div"
            align="center"
            padding={3}
          >
            {ordersDelivered}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default InfoTiles;
