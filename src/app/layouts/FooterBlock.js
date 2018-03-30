import React from 'react';
import Category from '../components/footer/FooterMenuCategory';
import OurAccount from '../components/footer/FooterMenuOurAccount';
import OurSupport from '../components/footer/FooterMenuOurSupport';
import Newsletter from '../components/footer/FooterMenuNewsletter';
import AboutUs from '../components/footer/FooterMenuAboutUs';
import FooterPackage from '../components/footer/FooterPackage';

const itemsCategory = [
    {"name": "Home", "href": "#"},
    {"name": "Avout us", "href": "#"},
    {"name": "surf apparel", "href": "#"},
    {"name": "Eshop", "href": "#"},
    {"name": "Features", "href": "#"},
    {"name": "New collection", "href": "#"},
    {"name": "Contact", "href": "#"}
];

const itemsOurAccount = [
    {"name": "Your Account", "href": "#"},
    {"name": "Personal information", "href": "#"},
    {"name": "Addresses", "href": "#"},
    {"name": "Discount", "href": "#"},
    {"name": "Orders history", "href": "#"},
    {"name": "Addresses", "href": "#"},
    {"name": "Search teams", "href": "#"}
];

const itemsOurSupport = [
    {"name": "Site map", "href": "#"},
    {"name": "Search teams", "href": "#"},
    {"name": "Advanced search", "href": "#"},
    {"name": "Mobile", "href": "#"},
    {"name": "Contacts us", "href": "#"},
    {"name": "Mobile", "href": "#"},
    {"name": "Blog", "href": "#"}
];

export default class FooterBlock extends React.Component {
    render() {
        return (
            <footer>
                <div className="footerBlock">
                    <div className="footerInside">
                        <Category itemsCategory={itemsCategory} />
                        <OurAccount itemsOurAccount={itemsOurAccount} />
                        <OurSupport itemsOurSupport={itemsOurSupport} />
                        <Newsletter/>
                        <AboutUs/>
                    </div>
                </div>

                <div className="footerBottom">
                    <div className="bottomInside">
                        <p>
                            &copy; 2018 SURFHOUSE
                        </p>

                        <FooterPackage/>
                    </div>
                </div>
            </footer>
        );
    }
}