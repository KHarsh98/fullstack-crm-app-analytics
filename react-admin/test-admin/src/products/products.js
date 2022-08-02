import React, { useState } from 'react';
import { Datagrid, DateField, EditButton, List, NumberField, TextField, DateInput, Edit, NumberInput, SimpleForm, TextInput, Create, SelectInput } from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="category" />
            <TextField source="description" />
            <DateField source="date_created" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductEdit = () => (
    const [lineItems, setlineItems] = useState();

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
    <Create>
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