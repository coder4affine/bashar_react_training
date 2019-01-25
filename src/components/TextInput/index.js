/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

const TextInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {label && <label>{label}</label>}
    <input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div style={{ color: 'red' }}>{errors[field.name]}</div>
    )}
  </div>
);

export default TextInput;
