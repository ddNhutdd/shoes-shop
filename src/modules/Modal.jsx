import React, { Component } from "react";
export default class Modal extends Component {
    render() {
        const { name, price, image, description } = this.props.selectedItem;
        const { addToCart } = this.props;
        return (
            <div className="modal fade" id="productDetailModel" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="card">
                                <div className="card-header">{name}</div>
                                <img
                                    src={image}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-text">{description}</p>
                                </div>
                                <div className="card-footer text-body-secondary d-flex justify-content-between align-items-center">
                                    <span>{price} $</span>
                                    <button
                                        onClick={() => {
                                            addToCart(this.props.selectedItem);
                                        }}
                                        className="btn btn-success"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
