import React from 'react';
import { Datagrid, DateField, EditButton, List, TextField, Edit, SimpleForm, TextInput, Create, SelectInput, Show, SimpleShowLayout } from 'react-admin';


export const ProductList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="category" />
            <TextField source="description" />
            <DateField source="date_created" />
        </Datagrid>
    </List>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput source="category" choices={[
                { id: 'Head', name: 'Head' },
                { id: 'Block', name: 'Block' },
            ]} />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = () => (
    <Create redirect='list'>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput source="category" choices={[
                { id: 'Head', name: 'Head' },
                { id: 'Block', name: 'Block' },
            ]} />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);