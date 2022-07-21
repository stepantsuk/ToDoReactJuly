import React from "react";
import s from "./Select.module.css";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select className={s.todo} value={value} onChange={e => onChange((e.target.value))}>
      <option value=''>{defaultValue}</option>
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

