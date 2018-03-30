import React from 'react';
import NewProductsItems from './NewProductsItems';

export default class AllNewProductsItem extends React.Component {
    render() {
        let newP_LabelNew = this.props.newP_LabelNew;

        let newP_LabelHot = this.props.newP_LabelHot;

        let arrayItems = this.props.newP.map((item, index) => {
            return (
                <NewProductsItems
                    img={item.img}
                    key={index}
                    price={item.price}
                    discount={item.discount}>{item.name}
                </NewProductsItems>
            )
        });

        return (
            <div className="newP">
                <div className="surfboard">
                    <div className="newSurfboard">
                        <img src={newP_LabelNew[0].img}/>
                        <span className="newSpan"><p>new</p></span>
                    </div>

                    <div>
                        <p>{newP_LabelNew[0].name}</p>
                        <p>{newP_LabelNew[0].price}</p>
                        <p>{newP_LabelNew[0].discount}</p>
                    </div>
                </div>

                <div className="surfboard">
                    <div className="hotSurfboard">
                        <img src={newP_LabelHot[0].img}/>
                        <span className="hotSpan"><p>hot</p></span>
                    </div>

                    <div>
                        <p>{newP_LabelHot[0].name}</p>
                        <p>{newP_LabelHot[0].price}</p>
                        <p>{newP_LabelHot[0].discount}</p>
                    </div>
                </div>

                {arrayItems}
            </div>
        );
    }
}