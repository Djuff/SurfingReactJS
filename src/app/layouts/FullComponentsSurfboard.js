import React from 'react';

import Menu from '../components/menu/Menu';
import HeaderBlock from '../layouts/HeaderBlock';
import SurfboardProducts from './SurfboardProducts';
import Brands from '../components/brands/Brands';
import InstImg from '../components/InstImg';
import LongBrand from '../components/brands/LongBrand';
import FooterBlock from '../layouts/FooterBlock';

const items = [
    {"name": "home", "href": "/"},
    {"name": "about", "href": "/about"},
    {"name": "surfboard", "href": "/surfboard"},
    {"name": "diving ammunition", "href": "/diving_ammunition"},
    {"name": "comments", "href": "/comments"}
];

export default class FullComponentsSurfboard extends React.Component {

    /** 1) Вариант **/
    // componentDidMount() {
    //     document.addEventListener('DOMContentLoaded', () => {
    //         alert("Welcome my site");
    //     });
    // }

    /** 2) Вариант **/
    // componentDidMount() {
    //     window.addEventListener('load', () => {
    //         alert("Welcome my site");
    //     });
    // }

    render() {
        return(
            <div>
                <HeaderBlock/>

                <div className="content">
                    <div className="contentInside">
                        <div className="leftBlock">
                            <div className="menu">
                                <div className="paragraphMenu">
                                    <h2>menu</h2>
                                </div>
                                <Menu items={items} />
                            </div>
                            <div className="menu2">
                                <h2>no is open!</h2>
                            </div>
                        </div>
                        <SurfboardProducts/>
                        <Brands/>
                        <InstImg/>
                        <LongBrand/>
                    </div>
                </div>

                <FooterBlock/>
            </div>
        );
    }
}
