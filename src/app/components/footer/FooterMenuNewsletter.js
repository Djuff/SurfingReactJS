import React from 'react';

export default class Newsletter extends React.Component {
    render() {
        return (
            <div className="secondBlock">
                <div className="secondBlockInside">
                    <h4>Newsletter</h4>
                    <p>
                        Join thousands of other people
                        subscribe to our news
                    </p>
                    <input type="text" placeholder="INSERT EMAIL">
                    </input>
                    <button>submit</button>
                </div>
                <div className="cards">
                    <img src="../images/cards/american-express.jpg" alt=""/>
                    <img src="../images/cards/master-card.jpg" alt=""/>
                    <img src="../images/cards/maestro.jpg" alt=""/>
                    <img src="../images/cards/paypal.jpg" alt=""/>
                    <img src="../images/cards/discover.jpg" alt=""/>
                    <img src="../images/cards/visa.jpg" alt=""/>
                </div>
            </div>
        );
    }
}