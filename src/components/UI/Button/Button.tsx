import { MouseEventHandler } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
