import React, { Component } from "react";
export default class Cart extends Component {
    buy = this.props.buy;
    renderData = () => {
        const da = this.props.cart;
        const { handleDeleteSp, addQuantity } = this.props;
        if (da.length) {
            return da.map((n) => {
                return (
                    <div key={n.id} className="row mb-2">
                        <div className="col-5">{n.name}</div>
                        <div className="col-3">
                            {" "}
                            <button
                                onClick={() => {
                                    addQuantity(n.id, 1);
                                }}
                                className="btn btn-success"
                            >
                                +
                            </button>{" "}
                            {n.quantity}{" "}
                            <button
                                onClick={() => {
                                    addQuantity(n.id, -1);
                                }}
                                className="btn btn-success"
                            >
                                -
                            </button>{" "}
                        </div>
                        <div className="col-2">{n.price} $</div>
                        <div className="col-2 d-flex flex-row-reverse align-items-start">
                            <button
                                onClick={() => {
                                    handleDeleteSp(n.id);
                                }}
                                className="btn btn-danger"
                            >
                                X
                            </button>
                        </div>
                    </div>
                );
            });
        }
    };
    totalPrice = () => {
        return this.props.cart.reduce(
            (t, ele) => (t += ele.price * ele.quantity),
            0,
        );
    };
    render() {
        return (
            <>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModel"
                    >
                        Giỏ hàng
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="cartModel" tabIndex={-1}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">
                                        Modal title
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                    />
                                </div>
                                <div className="modal-body">
                                    <div className="container-fluid">
                                        {this.renderData()}
                                        <hr />
                                        <span>
                                            Total: {this.totalPrice()} $
                                        </span>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => {
                                                this.buy();
                                            }}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
