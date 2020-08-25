import React from 'react';

class CartItem extends React.Component {
  /*
  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  increaseQuantity = () => {
    // console.log(this.state);
    //setState is inherited from React component
    
    setState form 1 || sha;;ow merging
    this.setState({
      qty: this.state.qty + 1,
    });
    
    //  setState form 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  */
  render() {
    const { price, title, qty } = this.props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProducts,
    } = this.props;
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
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              src="https://image.flaticon.com/icons/svg/659/659892.svg"
              className="action-icon"
              alt="decrease"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              className="action-icon"
              alt="delete"
              onClick={() => onDeleteProducts(product.id)}
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
