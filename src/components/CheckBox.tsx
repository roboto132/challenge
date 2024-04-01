import { useId } from 'react'
import { Country, CheckBoxProps } from '../types/types';

export const CheckBox = ({value, isChecked, handleCheckboxChange}:CheckBoxProps) => {
  const id = useId()
  return (
    <>
    <input
        id={id}
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={(e) => handleCheckboxChange(e.target.value as Country)}
    />
    <label
      htmlFor={id}
    >{value}</label>
    </>
  )
}
