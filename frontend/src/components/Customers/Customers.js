import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

function Customers() {
  const [customers, setcustomers] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/customers/");
      const customerList = await response.json();
      setcustomers(customerList);
    }
    fetchData();
  }, []);

  return (
    <>
      {customers && (
        <List>
          {customers.length >= 1 &&
            customers.map((customer) => {
              return (
                <ListItem>
                  <ListItemText primary={customer.name} />
                </ListItem>
              );
            })}
        </List>
      )}
    </>
  );
}

export default Customers;
