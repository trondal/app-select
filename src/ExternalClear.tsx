import React, { Component, useState } from "react";
import Select from "react-dropdown-select";

interface Option {
  value: any;
  label: string;
}

function ExternalClear(props: any) {
  const [state, setState] = useState({
    values: [props.options[0]]
  });

  const onChange = (values: any) =>
    setState({
      values
    });

  const onSet = (values: Option[]) => {
    const newValue = values.map(val => ({
      value: val.value,
      label: val.label
    }));

    return setState({
      values: [...newValue]
    });
  };

  const { options } = props;

  return (
    <React.Fragment>
      <p>
        I can be cleared from outside by setting values to <code>[]</code>{" "}
        <button onClick={() => onChange([])}>&times; clear</button>
      </p>
      <p>
        Values can be added from outside{" "}
        <button onClick={() => onSet([options[1]])}>&raquo; set</button>
      </p>
      <Select
        options={options}
        values={[...state.values]}
        onChange={(value: Option) => {
          onChange(value);
          console.log(
            `%c > onChange `,
            "background: #555; color: tomato",
            value
          );
        }}
      />
    </React.Fragment>
  );
}

export default ExternalClear;
