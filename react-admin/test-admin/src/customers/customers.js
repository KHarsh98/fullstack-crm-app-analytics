import React from 'react';
import { Create, Datagrid, DateField, DateInput, Edit, EditButton, EmailField, List, SimpleForm, TextField, TextInput } from 'react-admin';

export const CustomerList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
            <EmailField source="email" />
            <DateField source="date_created" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CustomerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="email" />
            <DateInput source="date_created" />
        </SimpleForm>
    </Edit>
);

export const CustomerCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="email" />
            <DateInput source="date_created" />
        </SimpleForm>
    </Create>
);