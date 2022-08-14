import React from 'react';
import { Create, Datagrid, DateField, Edit, EmailField, List, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin';

export const CustomerShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="phone" />
            <EmailField source="email" />
            <DateField source="date_created" />
        </SimpleShowLayout>
    </Show>
);
export const CustomerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" label='Customer' />
            <TextField source="phone" />
            <EmailField source="email" />
            <DateField source="date_created" />
        </Datagrid>
    </List>
);

export const CustomerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const CustomerCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);