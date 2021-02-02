// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

import { useSelector } from "react-redux";

import AddButton from "./buttons/AddButton";

const ProductList = ({ deleteProduct }) => {
  const products = useSelector((state) => state.products);
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
      <AddButton /> <br />
    </div>
  );
};

export default ProductList;
