import { ButtonContainer } from "./button.styles";

const Button = ({ color, bgColor, borderColor, text }) => {
  return (
    <ButtonContainer color={color} bgColor={bgColor} borderColor={borderColor}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
