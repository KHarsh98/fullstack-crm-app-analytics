import ColoredTextField from 'fields/ColoredTextField';
import React from 'react';
import { Datagrid, DateField, List, ReferenceField, TextField, ReferenceInput, SelectInput, SimpleForm, TextInput, Create, NumberField } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid rowClick="edit">
            <DateField source="date_of_order" />
            <TextField source="order_number" />
            <ReferenceField source="customerId" reference="customers"><TextField source="name" /></ReferenceField>
            <ColoredTextField source='status' />
            <ColoredTextField source='status_payment' label="Payment" />
            <NumberField source="amount" label='Total (&#x20B9;)' sx={{
                fontWeight: 'bold',
            }} />
        </Datagrid>
    </List>
);

export const OrderCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="order_number" fullWidth />
            <SelectInput fullWidth source="status" choices={[
                { id: 'Pending', name: 'Pending' },
                { id: 'Out for delivery', name: 'Out for delivery' },
                { id: 'Delivered', name: 'Delivered' },
            ]} />
            <SelectInput fullWidth source="status_payment" choices={[
                { id: 'Pending', name: 'Pending' },
                { id: 'Payed', name: 'Payed' },
                { id: 'Cancelled', name: 'Cancelled' },

            ]} />
            <ReferenceInput source="customerId" reference="customers">
                <SelectInput optionText="name" fullWidth />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

