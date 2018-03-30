import React from 'react';

export default class FooterPackage extends React.Component {
    render(){
        return (
            <div className="bottomRight">
                <i className="fa fa-facebook" aria-hidden="true"/>
                <i className="fa fa-twitter" aria-hidden="true"/>
                <i className="fa fa-youtube" aria-hidden="true"/>
                <i className="fa fa-google-plus" aria-hidden="true"/>
                <i className="fa fa-tumblr" aria-hidden="true"/>
                <i className="fa fa-pinterest-p" aria-hidden="true"/>
                <i className="fa fa-instagram" aria-hidden="true"/>
                <i className="fa fa-feed"/>
            </div>
        );
    }
}