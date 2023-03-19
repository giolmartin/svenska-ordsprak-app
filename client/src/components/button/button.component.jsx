import {
  BaseButton,
  TwitterButton,
  NextButton,
  PrevButton,
  NextIcon,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {

  default: 'default',
  next: 'next',
  previous: 'previous',
  twitter: 'twitter',
};
//TODO: Add style to the buttons

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) =>
  ({
    [BUTTON_TYPE_CLASSES.default]: BaseButton,
    [BUTTON_TYPE_CLASSES.next]: NextIcon,
    [BUTTON_TYPE_CLASSES.previous]: PrevButton,
    [BUTTON_TYPE_CLASSES.twitter]: TwitterButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
