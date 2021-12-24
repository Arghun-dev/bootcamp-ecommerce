import { combineReducers } from 'redux';
import { productsReducer } from './products/productsReducer';

export default combineReducers({
  products: productsReducer
});
