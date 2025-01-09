import React, { useState } from "react";

export const TextInput = ({
  label,
  value,
  name,
  onChange,
  placeholder,
  error,
  required = false,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      <label className="label label-text" htmlFor={name}>
        {label}
      </label>
      <div className="input-group">
        <input
          type={showPassword ? "text" : type}
          className={`input w-full ${error ? "is-invalid" : ""}`}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          required={required}
        />
        {type === "password" && (
          <span
            className="input-icon"
            onClick={togglePasswordVisibility}
            role="button"
            aria-label="Toggle Password Visibility"
          >
            {showPassword ? (
              <i className="icon icon-eye-off"></i>
            ) : (
              <i className="icon icon-eye"></i>
            )}
          </span>
        )}
      </div>

      {error && (
        <span className="label">
          <span className="label-text-alt text-error">{error}</span>
        </span>
      )}
    </div>
  );
};
