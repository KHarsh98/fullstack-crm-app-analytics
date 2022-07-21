import React from 'react';
import { Datagrid, DateField, EditButton, List, NumberField, TextField, DateInput, Edit, NumberInput, SimpleForm, TextInput, Create } from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="price" />
            <TextField source="category" />
            <TextField source="description" />
            <DateField source="date_created" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="price" />
            <TextInput source="category" />
            <TextInput source="description" />
            <DateInput source="date_created" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="price" />
            <TextInput source="category" />
            <TextInput source="description" />
            <DateInput source="date_created" />
        </SimpleForm>
    </Create>
);