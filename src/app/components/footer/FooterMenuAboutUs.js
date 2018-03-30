import React from 'react';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div className="thirdBlock">
                <h4>About us</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem.
                </p>
                <p>Phone:<span className="oneSpan">+7 (999) 345 00-00</span></p>
                <p>e-mail:<span className="twoSpan">info@surfhouse.com</span></p>
            </div>
        );
    }
}