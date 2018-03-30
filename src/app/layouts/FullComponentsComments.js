import React from 'react';
import {connect} from 'react-redux';

import {fetchComments} from '../actions/commentsActions';
import CommentsList from '../components/comments/CommentsList';

import Menu from '../components/menu/Menu';
import HeaderBlock from '../layouts/HeaderBlock';
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

@connect((store) => {
    return {
        comments: store.comments.comments,
        is_fetching: store.comments.is_fetching
    }
})

export default class FullComponentsCommits extends React.Component {

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

    constructor() {
        super(...arguments);

        let comments = fetchComments();
        this.props.dispatch(comments);
    }

    render() {
        return (
            <div>
                <HeaderBlock/>

                <div className="content">
                    <div className="contentInside">
                        <div className="leftBlock">
                            <div className="menu">
                                <div className="paragraphMenu">
                                    <h2>menu</h2>
                                </div>
                                <Menu items={items}/>
                            </div>
                            <div className="menu2">
                                <h2>no is open!</h2>
                            </div>
                        </div>

                        <div className="products">
                            <div className="paragraph">
                                <h1>Comments</h1>
                            </div>
                        </div>
                        <div>
                            {(!this.props.children) ? (
                                this.props.is_fetching ?
                                    'Идет загрузка данных...' :
                                    <CommentsList comments={this.props.comments}/>
                            ) :
                                (this.props.children)}
                        </div>
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
