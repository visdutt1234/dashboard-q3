import React, { useState } from "react";

const DateField = ({
  label,
  name,
  placeholder = "YYYY-MM-DD",
  required = false,
  ariaLabel,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateDate = (inputValue) => {
    if (required && !inputValue.trim()) {
      return "This field is required";
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(inputValue)) {
      return "Invalid date format (YYYY-MM-DD)";
    }
    return "";
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setError(validateDate(newValue));
  };

  return (
    <div className={`inputfield ${error ? "errorfield" : ""}`}>
      {label && (
        <label htmlFor={name} className="input-label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type="date"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        aria-label={ariaLabel || label}
        aria-invalid={!!error}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default DateField;
