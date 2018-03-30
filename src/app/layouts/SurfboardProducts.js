import React from 'react';
import Surfboard from "../components/products/Surfboard";

export default class SurfboardProducts extends React.Component {
    render() {
        return (
            <div className="products">
                <div className="paragraph">
                    <h1>Surfboard</h1>
                </div>
                <Surfboard/>
            </div>
        );
    }
}