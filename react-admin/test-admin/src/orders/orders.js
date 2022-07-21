import React from 'react';
import { Datagrid, DateField, List, ReferenceField, TextField, EditButton, ReferenceArrayField, ChipField, SingleFieldList, DateInput, Edit, ReferenceArrayInput, ReferenceInput, SelectInput, SimpleForm, TextInput, SelectArrayInput, Create, useRecordContext } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="order_number" />
            <DateField source="date_created" />
            <TextField source="status" />
            <ReferenceField source="customerId" reference="customers"><TextField source="name" /></ReferenceField>
            <ReferenceArrayField source='productIds' reference="products">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <EditButton />
        </Datagrid>
    </List>
);

const OrderTitle = () => {
    const record = useRecordContext();
    return <span>Order {record ? `${record.order_number}` : ''}</span>
}

export const OrderEdit = () => (
    <Edit title={<OrderTitle />}>
        <SimpleForm>
            <TextInput source="order_number" />
            <DateInput source="date_created" />
            <SelectInput source="status" choices={[
                { id: 'Pending', name: 'Pending' },
                { id: 'Out for delivery', name: 'Out for delivery' },
                { id: 'Delivered', name: 'Delivered' },
            ]} />
            <ReferenceInput source="customerId" reference="customers"><SelectInput optionText="name" /></ReferenceInput>
            <ReferenceArrayInput source="productIds" reference="products">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export const OrderCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="order_number" />
            <DateInput source="date_created" />
            <SelectInput source="status" choices={[
                { id: 'Pending', name: 'Pending' },
                { id: 'Out for delivery', name: 'Out for delivery' },
                { id: 'Delivered', name: 'Delivered' },
            ]} />
            <ReferenceInput source="customerId" reference="customers"><SelectInput optionText="name" /></ReferenceInput>
            <ReferenceArrayInput source="productIds" reference="products">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);