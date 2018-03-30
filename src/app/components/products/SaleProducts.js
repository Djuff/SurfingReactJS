import React from 'react';
import AllSaleProductsItems from './AllSaleProductsItems';

const saleP = [
    {
        'img': '../images/products/wetsuit.jpg',
        'name': 'SYNCRO MENS QS M',
        'price': '€ 249.95',
        'discount': '€ 450.15'
    },
    {
        'img': '../images/products/gloves.jpg',
        'name': 'RAMOS - SHIRT FOR MEN',
        'price': '€ 459.65',
        'discount': '€ 570.65'
    },
    {
        'img': '../images/products/rashguard.jpg',
        'name': 'STRIPE 19 QS',
        'price': '€ 940.00',
        'discount': '€ 1370.65'
    }
];

export default class TopProducts extends React.Component {
    render() {
        return (
            <AllSaleProductsItems
                saleP = {saleP}
            />
        );
    }
}