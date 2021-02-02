// ACTION TYPES
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

// ACTIONS
export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId: productId },
});

export const createProduct = (newProduct) => {
  return {
    type: CREATE_PRODUCT,
    payload: { newProduct: newProduct },
  };
};

export const updateProduct = (updatedProduct) => {
  return {
    type: UPDATE_PRODUCT,
    payload: { updatedProduct: updatedProduct },
  };
};
