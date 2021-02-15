import axios from "axios";

// ACTION TYPES
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

// ACTIONS
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8000/products/${productId}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: { productId },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (newProduct) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newProduct) formData.append(key, newProduct[key]);
    const res = await axios.post("http://localhost:8000/products", formData);
    dispatch({
      type: CREATE_PRODUCT,
      payload: { newProduct: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (updatedProduct) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedProduct) formData.append(key, updatedProduct[key]);
    await axios.put(
      `http://localhost:8000/products/${updatedProduct.id}`,
      formData
    );
    const product = this.products.find(
      (product) => product.id === updatedProduct.id
    );
    for (const key in updatedProduct) product[key] = updatedProduct[key];
    product.image = URL.createObjectURL(updatedProduct.image);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: { updatedProduct },
    });
  } catch (error) {
    console.log(error);
  }
};
