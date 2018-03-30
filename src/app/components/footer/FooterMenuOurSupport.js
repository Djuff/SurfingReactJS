import React from 'react';
import MenuItem from './FooterMenuItems';

export default class Menu extends React.Component {

    render() {
        let arrayItems = this.props.itemsOurSupport.map((item, index) => {
            return <MenuItem href={item.href} key={index}>{item.name}<br/></MenuItem>;
        });

        return (
            <div className="firstBlocks">
                <h4>Our Support</h4>
                {arrayItems}
            </div>
        );
    }
}