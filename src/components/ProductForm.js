import { useState } from "react";
import { createProduct } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

  const resetForm = () =>
    setProduct({
      name: "",
      description: "",
      price: "",
      image: "",
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(product));
    resetForm();

    history.push("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info ">Name</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Description</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Price</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Image</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <input className="btn btn-info" type="submit" />
      </div>
    </form>
  );
};

export default ProductForm;
