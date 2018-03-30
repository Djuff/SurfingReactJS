import React from 'react';
import TopAndSaleProductsItems from './TopAndSaleProductsItems';

export default class AllTopProductsItem extends React.Component {
    render() {
        let arrayItems = this.props.topP.map((item, index) => {

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
            <div className="topP">
                {arrayItems}
            </div>
        );
    }
}