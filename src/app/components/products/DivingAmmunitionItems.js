import React from 'react';

import NewProductsItems from './NewProductsItems';

export default class DivingAmmunitionItems extends React.Component {
    render() {
        let arrayItems = this.props.divingAmmunition.map((item, index) => {
            return (
                <NewProductsItems
                    img={item.img}
                    key={index}
                    price={item.price}
                    discount={item.discount}>{item.name}
                </NewProductsItems>
            )
        });

        return (
            <div className="newP allProducts">
                {arrayItems}
            </div>
        );
    }
}