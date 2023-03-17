import { BaseButton, TwitterButton, InvertedButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  //TODO:  Add styles for this
  twitter: 'twitter',
  inverted: 'inverted',
  default: 'default',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) =>
  ({
    [BUTTON_TYPE_CLASSES.default]: BaseButton,
    [BUTTON_TYPE_CLASSES.twitter]: TwitterButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
