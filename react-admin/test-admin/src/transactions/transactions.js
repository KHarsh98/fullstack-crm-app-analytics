import { Create, Datagrid, DateField, DateInput, Edit, EditButton, List, ReferenceField, ReferenceInput, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin';
import React from 'react';

export const TransactionShow = () => (
    <Show>
        <SimpleShowLayout>
            <DateField source="date_of_transaction" />
            <TextField source="status" />
            <ReferenceField source="orderId" reference="orders"><TextField source="id" /></ReferenceField>
        </SimpleShowLayout>
    </Show>
);

export const TransactionList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <DateField source="date_of_transaction" />
            <TextField source="status" />
            <ReferenceField source="orderId" reference="orders"><TextField source="order_number" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);


export const TransactionEdit = () => (
    <Edit>
        <SimpleForm>
            <DateInput source="date_of_transaction" />
            <TextInput source="status" />
            <ReferenceInput source="orderId" reference="orders"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const TransactionCreate = () => (
    <Create>
        <SimpleForm>
            <DateInput source="date_of_transaction" />
            <TextInput source="status" />
            <ReferenceInput source="orderId" reference="orders"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Create>
);