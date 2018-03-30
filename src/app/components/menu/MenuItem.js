import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component {
    render() {
        return (
            <Link className={"menuList " + (this.props.active ? 'active' : '')}
                  to={this.props.href}>{this.props.children}</Link>
        );
    }
}