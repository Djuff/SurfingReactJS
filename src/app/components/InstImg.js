import React from 'react';

export default class instImg extends React.Component {
    render() {
        return (
            <div className="instImg">
                <div className="midText">
                    <img src="../images/icon-instagram.png" alt="instagram"/>
                        <p>Instagram feed: </p>
                        <p>&#35;surfhouse</p>
                </div>
                <br>
                </br>
                    <div className="miniImg">
                        <img src="../images/instImg/1.jpg" alt="surfboard"/>
                        <img src="../images/instImg/2.jpg" alt="surfboard"/>
                        <img src="../images/instImg/3.jpg" alt="surfboard"/>
                        <img src="../images/instImg/4.jpg" alt="surfboard"/>
                        <img src="../images/instImg/5.jpg" alt="surfboard"/>
                        <img src="../images/instImg/6.jpg" alt="surfboard"/>
                    </div>
            </div>
        );
    }
}