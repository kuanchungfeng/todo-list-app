import { ChangeEventHandler } from "react";
import classes from "./Checkbox.module.css";

type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <input
      type="checkbox"
      checked={props.checked}
      className={classes.checkbox}
      onChange={props.onChange}
      disabled={props.disabled}
    ></input>
  );
};

export default Checkbox;
