import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  ariaLabel,
  info, // Tooltip text
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (required && !newValue.trim()) {
      setError("This field is required");
    } else if (
      type === "email" &&
      newValue.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue)
    ) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  return (
    <div className={`inputfield ${error ? "errorfield" : ""}`}>
      {label && (
        <label htmlFor={name} className="input-label">
          {label} {required && <span className="required">*</span>}
          {info && (
            <span
              className="info-icon"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              <FaInfoCircle size={16} />
              {showTooltip && <span className="tooltip">{info}</span>}
            </span>
          )}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        aria-label={ariaLabel || label}
        aria-invalid={error ? "true" : "false"}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputField;
