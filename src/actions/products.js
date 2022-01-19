import { UPDATE_PRODUCTS } from './actionTypes';
import { configFireStore } from '../firestore';
import * as firestore from 'firebase/firestore';

const db = configFireStore();
let productColl = firestore.collection(db, 'products');
export function fetchProducts() {
  //   productColl = firestore.query(
  //     productColl,
  //     firestore.orderBy('price', 'desc')
  //   );
  return (dispatch) => {
    firestore.onSnapshot(productColl, (snapshot) => {
      const productList = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      //console.log(productList);
      dispatch(updateProducts(productList));
    });
  };
}

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    products,
  };
}

export function increaseProductQuantity(products, product) {
  const index = products.indexOf(product);
  const docRef = firestore.doc(db, 'products', products[index].id);
  firestore.updateDoc(docRef, {
    qty: products[index].qty + 1,
  });
  return (dispatch) => {
    dispatch(fetchProducts());
  };
}

export function decreaseProductQuantity(products, product) {
  const index = products.indexOf(product);
  if (products[index].qty === 0) {
    return;
  }
  const docRef = firestore.doc(db, 'products', products[index].id);
  firestore.updateDoc(docRef, {
    qty: products[index].qty - 1,
  });
  return (dispatch) => {
    dispatch(fetchProducts());
  };
}

export function deleteProduct(id) {
  const docRef = firestore.doc(db, 'products', id);
  firestore.deleteDoc(docRef);
  return (dispatch) => {
    dispatch(fetchProducts());
  };
}

export function addProduct() {
  firestore.addDoc(productColl, {
    img: '',
    price: 999,
    qty: 3,
    title: 'Washing Machine',
  });
  return (dispatch) => {
    dispatch(fetchProducts());
  };
}
