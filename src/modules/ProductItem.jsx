import React, { Component } from "react";
export default class ProductItem extends Component {
    render() {
        const { name, price, image } = this.props.item;
        const { selectItem, addToCart } = this.props;
        return (
            <div className="col-4 mb-3">
                <div className="card product-item" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price} $</p>
                        <a
                            className="btn btn-primary"
                            onClick={() => {
                                addToCart(this.props.item);
                            }}
                        >
                            Add to cart
                        </a>
                        <a
                            data-bs-toggle="modal"
                            data-bs-target="#productDetailModel"
                            onClick={() => {
                                selectItem(this.props.item);
                            }}
                            className="btn btn-primary mx-3"
                        >
                            detail
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
