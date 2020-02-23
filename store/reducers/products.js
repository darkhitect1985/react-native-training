import { PRODUCTS }  from '../../data/dummy-data';


const initialState = {
    products: PRODUCTS,
    favouriteProducts:[]
};



const productsReducer = (state=initialState,action) => {
    return state;
};

export default productsReducer;