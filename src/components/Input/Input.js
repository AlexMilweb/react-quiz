import React from 'react';
import { Input, Label, Field, Error } from './Input.styled';

export default ({
  type,
  label,
  value,
  onChange,
  errorMessage,
  valid,
  shouldValidate,
  touched
}) => {
  const inputType = type || 'text';
  const id = `${inputType}-${Math.random()}`;
  const isInvalid = !valid && shouldValidate && touched;

  return (
    <Input>
      <Label htmlFor={id} error={isInvalid}>{label}</Label>
      <Field
        type={inputType}
        id={id}
        value={value}
        onChange={onChange}
        error={isInvalid}
      />
      {isInvalid && <Error>{errorMessage || 'Введите верное значение'}</Error>}
    </Input>
  )
}
