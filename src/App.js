import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        // snapshot.docs.map((doc) => {
        //   console.log(doc.data());
        // });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        });
        this.setState({
          products,
          loading: false,
        });
      });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products,
    // });

    const docRef = firebase
      .firestore()
      .collection('products')
      .doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log('Updated Successfully');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products,
    // });
    const docRef = firebase
      .firestore()
      .collection('products')
      .doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log('Updated Successfully');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  handleDeleteProducts = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => (count += product.qty));

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return '';
    });
    return cartTotal;
  };

  addProduct = () => {
    firebase
      .firestore()
      .collection('products')
      .add({
        img: '',
        price: 15000,
        qty: 3,
        title: 'Freezeer',
      })
      .then((docRef) => {
        console.log('Product added successfully', docRef);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct}>Add Product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProducts={this.handleDeleteProducts}
        />
        {loading && <h1>Loading products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL:{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
