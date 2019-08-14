import React, { Component } from "react";
import Select from "react-dropdown-select";

interface Option {
  value: any;
  label: string;
}

class ExternalClear extends React.Component<any, any> {
  state = { values: [this.props.options[0]] };

  onChange = (values: any) =>
    this.setState({
      values
    });

  onSet = (values: Option[]) => {
    console.log(values);
    const newValue = values.map(val => ({
      value: val.value,
      label: val.label
    }));

    return this.setState({
      //values: [...this.state.values, ...newValue]
      //values: [...newValue]
      values: [...newValue]
    });
  };

  render() {
    const { options, title } = this.props;
    return (
      <React.Fragment>
        <p>
          I can be cleared from outside by setting values to <code>[]</code>{" "}
          <button onClick={() => this.onChange([])}>&times; clear</button>
        </p>
        <p>
          Values can be added from outside{" "}
          <button onClick={() => this.onSet([options[1]])}>&raquo; set</button>
        </p>
        <Select
          options={options}
          values={[...this.state.values]}
          onChange={(value: Option) => {
            this.onChange(value);
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
}

export default ExternalClear;
