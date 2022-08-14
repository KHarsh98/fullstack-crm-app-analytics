import React from 'react';
import { Stack } from '@mui/material';
import { Create, Datagrid, Edit, EmailField, ImageInput, List, SimpleForm, TextField, TextInput, WrapperField } from 'react-admin';
import CustomerProfilePic from 'fields/CustomerProfilePic';

export const CustomerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <WrapperField label="Customer">
                <Stack direction='row' alignItems='center' gap={2}>
                    <CustomerProfilePic source='profile' />
                    <TextField source="name" />
                </Stack>
            </WrapperField>
            <TextField source="company" />
            <TextField source="location" />
            <TextField source="position" />
            <TextField source="phone" />
            <EmailField source="email" />
            <TextField source="count_total_orders" label="Total Orders" />
            <TextField source="count_total_spent" label="Total Revenue (&#x20B9;)" />
        </Datagrid>
    </List>
);

export const CustomerEdit = () => (
    <Edit>
        <SimpleForm>
            <Stack direction='row' width="100%" gap={10}>
                <Stack flex={1}>
                    <ImageInput source="profile" fullWidth />
                    <TextInput source="name" fullWidth />
                    <TextInput source="phone" fullWidth />
                    <TextInput source="email" fullWidth />
                </Stack>
                <Stack flex={2} justifyContent='flex-end'>
                    <TextInput source="company" fullWidth />
                    <TextInput source="location" fullWidth />
                    <TextInput source="position" fullWidth />
                </Stack>

            </Stack>
        </SimpleForm>
    </Edit>
);

export const CustomerCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <Stack direction='row' width="100%" gap={10}>
                <Stack flex={1}>
                    <ImageInput source="profile" fullWidth />
                    <TextInput source="name" fullWidth />
                    <TextInput source="phone" fullWidth />
                    <TextInput source="email" fullWidth />
                </Stack>
                <Stack flex={2} justifyContent='flex-end'>
                    <TextInput source="company" fullWidth />
                    <TextInput source="location" fullWidth />
                    <TextInput source="position" fullWidth />
                </Stack>

            </Stack>
        </SimpleForm>
    </Create>
);