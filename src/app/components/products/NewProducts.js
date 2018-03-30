import React from 'react';
import AllNewProductsItem from './AllNewProductsItems';

const newP_LabelNew = [
    {
        'img': '../images/new-corner.png',
        'name': 'Single Thruster 2014',
        'price': '€ 865.00',
        'discount': ''
    }
];
const newP_LabelHot = [
    {
        'img': '../images/hot-corner.png',
        'name': 'Freestyle Wave FSW',
        'price': '€ 770.50',
        'discount': '€ 1,270.15'
    }
];
const newP = [
    {
        'img': '../images/products/surf3.jpg',
        'name': 'The White Collection SURFBOARD 2014',
        'price': '€ 1,580.70',
        'discount': ''
    },
    {
        'img': '../images/products/surf4.jpg',
        'name': 'OG SCALLOP SOLID',
        'price': '€ 765.00',
        'discount': ''
    },
    {
        'img': '../images/products/surf5.jpg',
        'name': 'STRIPE 19 QS',
        'price': '€ 230.50',
        'discount': ''
    },
    {
        'img': '../images/products/surf6.jpg',
        'name': 'YOKE 19 QS',
        'price': '€ 1,130.70',
        'discount': ''
    }
];

export default class NewProducts extends React.Component {
    render() {
        return (
            <AllNewProductsItem
                newP_LabelNew = {newP_LabelNew}
                newP_LabelHot = {newP_LabelHot}
                newP = {newP}
            />
        );
    }
}