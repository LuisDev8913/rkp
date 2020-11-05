import React, { useContext } from 'react';
import StoreContext from "../context/store/StoreContext";

export const Product = ({ products }) => {
    const storeContext = useContext(StoreContext);

    return(
        <>
            {
                products.map(product => (
                    <div key={ product.id } className="col product-wrapper">
                        <img src={ product.src } alt=""/>
                        <h3>{ product.title }</h3>
                        <p>{ product.weight } г</p>
                        <div className="price">
                            <div className="new-price">{ product.price } грн</div>
                            <div className="old-price"><s>{ product.old_price } грн</s></div>
                        </div>
                        <button className="btn btn-lg btn-primary btn-add-cart" onClick={ storeContext.addProductToCart.bind(this, product) }>
                            <i className="fas fa-shopping-basket display-7"/>
                            До кошика
                        </button>
                    </div>
                ))
            }
        </>
    )
}