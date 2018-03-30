import React from 'react';

export default class NewProductsItems extends React.Component {
    render() {
        return (
            <div className="surfboard">
                <img src={this.props.img} alt="Surfboard"/>
                <div>
                    <p>{this.props.children}</p>
                    <p>{this.props.price}</p>
                    <p>{this.props.discount}</p>
                </div>
            </div>
        );
    }
}