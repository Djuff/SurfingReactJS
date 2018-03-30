import React from 'react';

import SurfboardItems from './SurfboardItems';

const surfboard = [
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
    },
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
    },
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
    },
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
    }
];

export default class Surfboard extends React.Component {
    render() {
        return (
            <SurfboardItems
                surfboard = {surfboard}
            />
        );
    }
}