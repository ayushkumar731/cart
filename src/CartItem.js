import React from 'react';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Phone',
      price: 999,
      qty: 1,
      img: '',
    };
  }
  increaseQuantity = () => {
    console.log(this.state);
  };
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={style.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: '#777' }}>Rs {price}</div>
          <div style={{ color: '#777' }}>Qty : {qty}</div>
          <div className="cart-item-action">
            <img
              src="https://image.flaticon.com/icons/svg/709/709484.svg"
              className="action-icon"
              alt="increase"
              onClick={this.increaseQuantity}
            />
            <img
              src="https://image.flaticon.com/icons/svg/659/659892.svg"
              className="action-icon"
              alt="decrease"
            />
            <img
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              className="action-icon"
              alt="delete"
            />
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 10,
    background: '#ccc',
  },
};

export default CartItem;
