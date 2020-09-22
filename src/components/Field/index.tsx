import React from 'react';

interface IOnChange<FormEvent> {
 (e: FormEvent): void;
}

interface IField {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  autoComplete: string;
  value: string;
 onChange: IOnChange<React.FormEvent>;
}

const Field = ({
  label, id, type, placeholder, required, autoComplete, value, onChange,
}: IField) => (
  <div>
    <label htmlFor="{id}">{label}</label>
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
