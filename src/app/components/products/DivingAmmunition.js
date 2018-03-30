import React from 'react';

import DivingAmmunitionItems from './DivingAmmunitionItems';

const divingAmmunition = [
    {
        'img': '../images/products/wetsuit.jpg',
        'name': 'SYNCRO MENS QS M',
        'price': '€ 249.95',
        'discount': '€ 450.15'
    },
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
    },
    {
        'img': '../images/products/gloves.jpg',
        'name': 'RAMOS - SHIRT FOR MEN',
        'price': '€ 459.65',
        'discount': '€ 570.65'
    },
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
    },
    {
        'img': '../images/products/rashguard.jpg',
        'name': 'STRIPE 19 QS',
        'price': '€ 940.00',
        'discount': '€ 1370.65'
    },
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

export default class DivingAmmunition extends React.Component {
    render() {
        return (
            <DivingAmmunitionItems
                divingAmmunition = {divingAmmunition}
            />
        );
    }
}