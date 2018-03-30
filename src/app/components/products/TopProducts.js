import React from 'react';
import AllTopProductsItem from './AllTopProductsItems';

const topP = [
    {
        'img': '../images/products/springsuit1.jpg',
        'name': 'ushingham Lightning 2014 ',
        'price': '€ 2,960.95',
        'discount': '€ 3,100.15'
    },
    {
        'img': '../images/products/springsuit2.jpg',
        'name': 'CYPHER HEAT VES',
        'price': '€ 849.95',
        'discount': ''
    },
    {
        'img': '../images/products/springsuit3.jpg',
        'name': 'SYNCRO WOMENS QS',
        'price': '€ 1,110.99',
        'discount': ''
    }
];

export default class TopProducts extends React.Component {
    render() {
        return (
            <AllTopProductsItem
                topP = {topP}
            />
        );
    }
}