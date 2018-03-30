import React from 'react';
import DivingAmmunition from "../components/products/DivingAmmunition";

export default class DivingAmmunitionProducts extends React.Component {
    render() {
        return (
            <div className="products">
                <div className="paragraph">
                    <h1>Diving Ammunition</h1>
                </div>
                <DivingAmmunition/>
            </div>
        );
    }
}