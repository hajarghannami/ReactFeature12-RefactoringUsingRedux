import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const AddButton = () => {
  return (
    <Link to="/product-form">
      <AddButtonStyled type="button">Add cookie</AddButtonStyled>
    </Link>
  );
};

export default AddButton;
