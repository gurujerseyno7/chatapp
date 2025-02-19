import { TextField } from '@mui/material'
import React from 'react'

interface TextFieldProps{
    label:string,
    name:string,
    className:string,
    type:'text'|'number'|'password'|'search'
    placeholder:string,
    variant:'filled'|'outlined'|'standard'
    helperText?:string,
    isOptional:boolean,
    onChange?:() =>void
}

const CustomTextField = (props: TextFieldProps) => {
  return (
    <TextField {...props}/>
  )
}

export default CustomTextField