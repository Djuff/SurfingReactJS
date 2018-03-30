import React from 'react';
import TopAndSaleProductsItems from './TopAndSaleProductsItems';

export default class AllSaleProductsItems extends React.Component {
    render() {
        let arrayItems = this.props.saleP.map((item, index) => {

            return (
                <TopAndSaleProductsItems
                    img={item.img}
                    key={index}
                    price={item.price}
                    discount={item.discount}>{item.name}
                </TopAndSaleProductsItems>
            )
        });

        return (
            <div className="saleP">
                {arrayItems}
            </div>
        );
    }
}