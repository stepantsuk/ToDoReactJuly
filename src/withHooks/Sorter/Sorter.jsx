import React from "react";
import css from "./Sorter.module.css";

const DEFAULTVALUE = "Sort...";
const OPTIONS = [
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

export const Sorter = React.memo(({ value, onChange }) => {
  console.log("render SORTER");
  return (
    <select
      className={css.todo}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{DEFAULTVALUE}</option>
      {OPTIONS.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        );
      })}
    </select>
  );
});
