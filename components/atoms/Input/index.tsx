import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  isRequired?: boolean;
}

const Input = ({name, isRequired, ...rest}: InputProps) => {
  return (
    <input name={name} required={isRequired} {...rest} />
  )
}

export default Input