import React from 'react';
import { Cart, Navbar } from './';
import { connect } from 'react-redux';
import {
  addProduct,
  decreaseProductQuantity,
  deleteProduct,
  fetchProducts,
  increaseProductQuantity,
} from '../actions/products';
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: [],
  //     loading: true,
  //   };
  //   this.db = configFireStore();
  // }
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.props;
    this.props.dispatch(increaseProductQuantity(products, product));
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.props;
    this.props.dispatch(decreaseProductQuantity(products, product));
  };
  handleDeleteProduct = (id) => {
    this.props.dispatch(deleteProduct(id));
  };
  getCartCount = () => {
    const { products } = this.props;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.props;
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.qty;
    });
    return total;
  };
  addProduct_ = () => {
    this.props.dispatch(addProduct());
  };
  render() {
    const { products } = this.props;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button
          onClick={this.addProduct_}
          style={{ fontsize: 20, padding: 20 }}
        >
          {' '}
          Add a product{' '}
        </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {/* <h1> Loading Products....</h1> */}
        <div
          style={{
            fontSize: 20,
            padding: 10,
            right: '20px',
            position: 'fixed',
            background: '#4267b2',
            color: 'white',
          }}
        >
          {' '}
          Total : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(App);
