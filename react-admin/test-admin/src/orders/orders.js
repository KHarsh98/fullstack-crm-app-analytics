import React from 'react';
import { Datagrid, DateField, List, ReferenceField, TextField, EditButton, ReferenceArrayField, ChipField, SingleFieldList, DateInput, Edit, ReferenceArrayInput, ReferenceInput, SelectInput, SimpleForm, TextInput, SelectArrayInput, Create, useRecordContext } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="order_number" />
            <DateField source="date_of_order" />
            <TextField source="status" />
            <ReferenceField source="customerId" reference="customers"><TextField source="name" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

const OrderTitle = () => {
    const record = useRecordContext();
    return <span>Order {record ? `${record.order_number}` : ''}</span>
}

export const OrderEdit = () => (
    const fetchOrderLineItems = async () => {
        const response = await fetch('get_order_line_items');
        const lineItems = await response.json();
        return lineItems;
    }
    useEffect(() => {


}, [])


    < Edit title = {< OrderTitle />}>
        <SimpleForm>
            <TextInput source="order_number" />
            <SelectInput source="status" choices={[
                { id: 'Pending', name: 'Pending' },
                { id: 'Out for delivery', name: 'Out for delivery' },
                { id: 'Delivered', name: 'Delivered' },
            ]} />
            <ReferenceInput source="customerId" reference="customers"><SelectInput optionText="name" /></ReferenceInput>
        </SimpleForm>
    </Edit >
);

export const OrderCreate = () => (
    <Create>
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