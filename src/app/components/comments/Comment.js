import React from 'react';

export default class Comment extends React.Component {
    render(){
        return (
            <div className="products">
                <div className="comments allProducts">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="panel-body">
                            <p>{this.props.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}