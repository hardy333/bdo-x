import React from "react";
import Select from "react-select";

const ShopSettings = ({ options, option, setOption }) => {
  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  // console.log(selectOptions);
  // console.log({ option });
  return (
    <div className="shop-settings">
      <Select
        value={{ value: option, label: option }}
        options={selectOptions}
        onChange={(value) => {
          setOption(value.value);
        }}
      />
      <p>
        Avarage SLA <span>{80}</span>{" "}
      </p>
    </div>
  );
};

export default ShopSettings;
