import React from "react";
import Select from "react-dropdown-select";
import { IOption } from "./App";

interface DropDownSelect {
  options: IOption[];
  (values: IOption[]): IOption[];
}

function DropDownSelect(props: any) {
  return (
    <Select
      options={props.options}
      onChange={(value: any) => {
        props.onChange(value);
      }}
    />
  );
}

export default DropDownSelect;
