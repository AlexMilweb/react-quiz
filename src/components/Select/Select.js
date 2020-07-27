import React from 'react'
import { SelectComponent, Label, Select, Option } from './Select.styled'

export default ({ label, value, options, onChange }) => {
  const htmlFor = `${label}-${Math.random()}`

  return (
    <SelectComponent>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Select
        id={htmlFor}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <Option
            value={option.value}
            key={option.value + index}
          >
            {option.text}
          </Option>
        ))}
      </Select>
    </SelectComponent>
  )
}
