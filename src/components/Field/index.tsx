import React, { ChangeEvent } from 'react';

interface IOnChange<T> {
 (e: T): void;
}

interface IField {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  autoComplete: string;
  value: string;
  onChange: IOnChange<ChangeEvent<HTMLInputElement>>;
}

const Field = ({
  label, id, type, placeholder, required, autoComplete, value, onChange,
}: IField) => (
  <div style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Field;
