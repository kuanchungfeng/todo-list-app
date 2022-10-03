import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

import Form from "react-bootstrap/Form";
import classes from "./TextInput.module.css";

type TextInputProps = {
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

const TextInput: React.FC<TextInputProps> = (props) => {
  const [enterText, setEnterText] = useState(props.value);
  const { placeholder, className, onChange, onKeyDown } = props;

  const onChangeHandler = (event: any) => {
    onChange?.(event);
    setEnterText(event.target.value);
  };

  return (
    <Form.Control
      className={`${classes.input ? classes.input : ""}${
        className ? " " + className : ""
      }`}
      type="text"
      onChange={onChangeHandler}
      value={enterText}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
