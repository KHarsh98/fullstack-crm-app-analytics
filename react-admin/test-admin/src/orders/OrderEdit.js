import React from 'react'
import { Edit, useRecordContext, SimpleForm, TextInput, SelectInput, ReferenceInput, ReferenceManyField, NumberField, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin';
const OrderEdit = () => {


    const OrderTitle = () => {
        const record = useRecordContext();

        return <span>Order {record ? `${record.order_number}` : ''}</span>
    }

    return (
        <Edit title={< OrderTitle />}>

            <SimpleForm>

                <TextInput source="order_number" />
                <SelectInput source="status" choices={[
                    { id: 'Pending', name: 'Pending' },
                    { id: 'Out for delivery', name: 'Out for delivery' },
                    { id: 'Delivered', name: 'Delivered' },
                ]} />
                <ReferenceInput source="customerId" reference="customers"><SelectInput optionText="name" /></ReferenceInput>
                <ReferenceManyField label='Products' reference='product-quantity' target='orderId'>
                    <Datagrid>
                        <ReferenceField source='productId' reference='products'>
                            <TextField source='name' />

                        </ReferenceField>
                        <NumberField source='qty' />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleForm>
        </Edit >
    )
}

export default OrderEdit