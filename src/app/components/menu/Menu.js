import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {

    isActive(href)
    {
        return window.location.pathname === href;
    }

    render() {
        let arrayItems = this.props.items.map((item, index) => {
            return <MenuItem href={item.href} active={this.isActive(item.href)} key={index}>{item.name}</MenuItem>;
        });

        return (
            <div>
                {arrayItems}
            </div>
        );
    }
}