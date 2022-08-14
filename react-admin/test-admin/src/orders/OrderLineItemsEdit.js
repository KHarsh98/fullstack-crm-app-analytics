import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin';
import React from 'react';
import "./orderlineitemsedit.scss";

const OrderLineItemsEdit = () => (
    <Edit>
        <SimpleForm>
            <div className="order-items">
                <div className='product'>
                    <ReferenceInput source="productId" reference="products"><SelectInput optionText="name" fullWidth /></ReferenceInput>
                </div>
                <div className='qty'>
                    <NumberInput source="qty" fullWidth />
                </div>
            </div>

        </SimpleForm>
    </Edit>
);
export default OrderLineItemsEdit;