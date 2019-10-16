import React from "react";
import { IOption } from "./App";

function Select({
  onSubmit,
  onChange,
  options
}: {
  onSubmit: any;
  onChange: any;
  options: any;
}) {
  //const [username, setUsername] = useState("");

  return (
    <form>
      <select
        onChange={event => {
          onChange(event);
        }}
      >
        {options.map((option: IOption) => {
          return (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default Select;
