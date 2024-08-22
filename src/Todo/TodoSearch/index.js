import "./TodoSearch.css";
import React from "react";

export function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <input className="TodoSearch" disabled={loading}
      placeholder="mi tarea pendiente"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }} />
  );
}