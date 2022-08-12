import React from 'react';
import { Datagrid, DateField, List, ReferenceField, TextField, EditButton, ReferenceInput, SelectInput, SimpleForm, TextInput, Create, Show, SimpleShowLayout, NumberField, ReferenceManyField, ReferenceArrayInput } from 'react-admin';

export const OrderShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="order_number" />
            <DateField source="date_of_order" />
            <TextField source="status" />
            <TextField source="amount" />
            <ReferenceField source="customerId" reference="customers"><TextField source="name" /></ReferenceField>
        </SimpleShowLayout>
    </Show>
);

export const OrderList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="order_number" />
            <DateField source="date_of_order" />
            <TextField source="status" />
            <ReferenceField source="customerId" reference="customers"><TextField source="name" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const OrderCreate = () => (
    <Create redirect='list'>
        <SimpleForm>
            <TextInput source="order_number" />
            <SelectInput source="status" choices={[
                { id: 'Pending', name: 'Pending' },
                { id: 'Out for delivery', name: 'Out for delivery' },
                { id: 'Delivered', name: 'Delivered' },
            ]} />
            <ReferenceInput source="customerId" reference="customers"><SelectInput optionText="name" /></ReferenceInput>
        </SimpleForm>
    </Create>
);

