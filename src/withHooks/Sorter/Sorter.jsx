import React from "react";
import css from "./Sorter.module.css";

export const Sorter = React.memo(({ value, onChange }) => {
  const defaultValue = "Sort...";
  const options = [
    {
      value: "value",
      name: "by value",
    },
    {
      value: "id",
      name: "by id",
    },
    {
      value: "complete",
      name: "by complete",
    },
  ];

  console.log("render SORTER");
  return (
    <select
      className={css.todo}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{defaultValue}</option>
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        );
      })}
    </select>
  );
});
