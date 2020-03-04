import { PRODUCTS }  from '../../data/dummy-data';
import { TOGGLE_FAVORITE} from '../actions/products';


const initialState = {
    products: PRODUCTS,
    favouriteProducts:[]
};



const productsReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
          const existingIndex = state.favouriteProducts.findIndex(
            product => product.id === action.productId
          );
          if (existingIndex >= 0) {
            const updatedFavProducts = [...state.favouriteProducts];
            updatedFavProducts.splice(existingIndex, 1);
            return { ...state, favouriteProducts: updatedFavProducts };
          } else {
            const product = state.products.find(product => product.id === action.productId);
            return { ...state, favouriteProducts: state.favouriteProducts.concat(product) };
          }
    default:
        return state;
    }
};

export default productsReducer;