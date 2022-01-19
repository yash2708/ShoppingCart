import { UPDATE_PRODUCTS } from '../actions/actionTypes';
export default function products(state = [], action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
