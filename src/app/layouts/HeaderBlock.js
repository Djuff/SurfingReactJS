import React from 'react';
import HeaderTextLeft from '../pages/HeaderTextLeft';
import HeaderTextRight from '../pages/HeaderTextRight';
import Package from '../components/fontAwesomePackage/Package';

export default class HeaderBlock extends React.Component {

    render() {
        return (
            <header>
                <div className="headerBlock">
                    <div className="headerInside">

                        <div className="package">
                            <Package/>
                        </div>

                        <div className="headerLeft">
                            <HeaderTextLeft/>
                        </div>

                        <div className="headerRight">
                            <HeaderTextRight/>
                        </div>

                        <div className="contentTop">
                            <div className="menuTop"/>
                            <div className="productsTop"/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}