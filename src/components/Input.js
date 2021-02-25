import React from "react";

export default function Input(props) {
  const { placeholder, name, type = "text" } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="ui-textfield"
    />
  );
}
