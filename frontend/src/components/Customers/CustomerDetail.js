import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants";

function CustomerDetail() {
  const { id } = useParams();
  const [customer, setcustomer] = useState();
  useEffect(() => {
    async function fetchCustomerDetails(customerId) {
      const request = API_URL + `/customers/${customerId}`;
      const response = await fetch(request);
      const customerDetails = await response.json();
      console.log(customerDetails);
      setcustomer(customerDetails);
    }
    fetchCustomerDetails(id);
  }, []);

  return (
    <>
      {customer && (
        <>
          <div>{customer.name}</div>
          <div>{customer.phone}</div>
          {customer.orders.map((order) => {
            return <li>{order.status}</li>;
          })}
        </>
      )}
    </>
  );
}

export default CustomerDetail;
