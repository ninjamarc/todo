import { TextField } from '@material-ui/core';
import React from 'react';




export default function TextInput(props) {

    const {name, label, value, error=null, onChange, ...other } = props;
    return (
        <TextField 
            variant="outlined"
            label={label}
            name={name}
            values={value}
            onChange={onChange}
            {...other}
            //Check to see if error is not null, return error and helperText
            {...(error && {error:true, helperText:error})}
        />
    )
}


