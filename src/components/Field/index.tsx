import React, { ChangeEvent } from 'react';
import { FormRow, FormRowLabel, FormRowInput } from '../Structure';

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
  <FormRow>
    <FormRowLabel htmlFor={id}>{label}</FormRowLabel>
    <FormRowInput
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </FormRow>
);

export default Field;
