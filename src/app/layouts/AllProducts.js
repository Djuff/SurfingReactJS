import React from 'react';
import NewProducts from '../components/products/NewProducts';
import TopProducts from '../components/products/TopProducts';
import SaleProducts from '../components/products/SaleProducts';

export default class Products extends React.Component {
    render() {
        return (
            <div className="products">
                <div className="paragraph">
                    <h1>new products</h1>
                </div>
                <NewProducts/>

                <div className="paragraph paragraph2">
                    <h1>top products</h1>
                </div>
                <TopProducts/>

                <div className="paragraph paragraph3">
                    <h1>sale products</h1>
                </div>
                <SaleProducts/>
            </div>
        );
    }
}