import { queryByLabelText } from "@testing-library/react";
import "../button/style.css";

function alertMessage() {
  alert("A label desse botão é Baixar CV");
}

const Button = (props) => {
  return (
    <button className="btn" onClick={() => alertMessage()}>
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  label: "Clique aqui",
};

export default Button;
