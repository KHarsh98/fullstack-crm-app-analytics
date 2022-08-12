import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin';
import React from 'react';

const redirect = (basePath, id, data) => `orders/${data.id}`

const OrderLineItemsEdit = () => (
    <Edit redirect={redirect}>
        <SimpleForm>
            <ReferenceInput source="productId" reference="products"><SelectInput optionText="name" /></ReferenceInput>
            <ReferenceInput source="orderId" reference="orders"><SelectInput optionText="order_number" /></ReferenceInput>
            <NumberInput source="qty" />
        </SimpleForm>
    </Edit>
);
export default OrderLineItemsEdit;