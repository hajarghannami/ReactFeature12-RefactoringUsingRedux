import { UpdateButtonStyled } from "../../styles";
import { Link } from "react-router-dom";

const UpdateButton = (props) => {
  return (
    <Link to={`/products/${props.productSlug}/edit`}>
      <UpdateButtonStyled>Update</UpdateButtonStyled>
    </Link>
  );
};

export default UpdateButton;
