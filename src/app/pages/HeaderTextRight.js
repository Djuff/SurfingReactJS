import React from 'react';
import HeaderButton from '../components/header/HeaderButton';

export default class headerTextRight extends React.Component {
    render(){
        return (
            <div>
                <h1>JP Funride 2014</h1>
                <p>
                    Super easy going freeride boards based
                    on the X-Cite Ride shape concept with
                    additional control and super easy jibing.
                </p>
                <HeaderButton/>
            </div>
        );
    }
}