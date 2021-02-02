import products from "../products";
import slugify from "react-slugify";

const initialState = {
  products: products,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case "CREATE_PRODUCT":
      action.payload.newProduct.id =
        state.products[state.products.length - 1].id + 1;
      action.payload.newProduct.slug = slugify(action.payload.newProduct.name);
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };
    default:
      return state;
  }
};

export default reducer;
