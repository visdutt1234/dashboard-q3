import React, { useState } from "react";

const Select = ({
  label,
  options = [],
  defaultValue,
  required = false,
  errorMessage = "Please select an option",
  placeholder = "Select an option",
}) => {
  const [selected, setSelected] = useState(defaultValue || "");
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const id = `select-${label?.replace(/\s+/g, "-").toLowerCase() || "field"}`;

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    setIsTouched(true);
    setError(value ? "" : errorMessage);
  };

  if (!Array.isArray(options)) {
    console.error("Invalid options provided. Expected an array.");
    return <p style={{ color: "red" }}>Error: Invalid options data.</p>;
  }

  return (
    <div className="inputfield selectfield">
      {label && (
        <label htmlFor={id} className="input-label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <select
        id={id}
        value={selected}
        onChange={handleChange}
        onBlur={() => setIsTouched(true)}
        aria-label={label || "Select an option"}
        aria-required="true"
        aria-invalid={!!error}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value} aria-label={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      {isTouched && error && (
        <p style={{ color: "red" }} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
