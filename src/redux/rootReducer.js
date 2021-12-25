import { combineReducers } from 'redux';
import { productsReducer } from './products/productsReducer';
import { productBasketReducer } from './productsBasket/productBasketReducer';

export default combineReducers({
  productsReducer,
  productBasketReducer
});
