import React from "react";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value={defaultValue}>
        {defaultValue}
      </option>
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;

// <select>
//       {/* <option disabled value={defaultValue}>
//         {defaultValue}
//       </option> */}
//       {options.map((opt) => {
//         <option key={opt.value} value={opt.value}>{opt.name}</option>;
//       })}
//     </select>
