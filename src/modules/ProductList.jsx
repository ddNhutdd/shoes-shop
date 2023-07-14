import React, { Component } from "react";
import ProductItem from "./ProductItem";
import mock_data from "./data.json";
import Modal from "./Modal";
import Cart from "./Cart";
let m_data = mock_data;
export default class ProductList extends Component {
    state = {
        selectedItem: m_data[0],
        cart: [],
    };
    selectItem = (item) => {
        this.setState({
            selectedItem: item,
        });
    };
    addToCart = (item) => {
        let newCart = [...this.state.cart];
        let inExistItem = newCart.findIndex((n) => n.id == item.id);
        if (inExistItem === -1) {
            item.quantity = 1;
            newCart.push(item);
        } else {
            newCart[inExistItem].quantity += 1;
        }
        this.setState({
            cart: newCart,
        });
        alert("Thêm sản phẩm thành công");
    };
    handleDeleteSp = (maSP) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa hay không")) {
            const newGioHang = this.state.cart.filter(
                (item) => item.id !== maSP,
            );
            this.setState({
                cart: newGioHang,
            });
        }
    };
    addQuantity = (id, amount) => {
        let newCart = [...this.state.cart];
        let item = newCart.filter((n) => n.id === id)[0];
        item.quantity += amount;
        if (item.quantity < 1) {
            this.handleDeleteSp(id);
        } else {
            this.setState({
                cart: newCart,
            });
        }
    };
    buy = () => {
        this.setState({
            cart: [],
        });
        alert("Mua thành công");
    };
    render() {
        return (
            <>
                <Cart
                    buy={this.buy}
                    addQuantity={this.addQuantity}
                    handleDeleteSp={this.handleDeleteSp}
                    cart={this.state.cart}
                />
                <div>
                    {/* list product */}
                    <h1 className="text-center fw-bolder mb-5">SHOES SHOP</h1>
                    <div className="container">
                        <div className="row">
                            {m_data.map((ele) => (
                                <ProductItem
                                    addToCart={this.addToCart}
                                    selectItem={this.selectItem}
                                    key={ele.id}
                                    item={ele}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Modal
                    addToCart={this.addToCart}
                    selectedItem={this.state.selectedItem}
                />
            </>
        );
    }
}
