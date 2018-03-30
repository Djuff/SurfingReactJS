import React from 'react';

export default class MenuItem extends React.Component {
    render() {
        return (
            <a href={this.props.href}>{this.props.children}</a>
        );
    }
}