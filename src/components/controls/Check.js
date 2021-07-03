import { FormControl, FormControlLabel } from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';
import React from 'react';

export default function Check(props) {

    const { name, label, value, onChange } = props;
    const defaultEvent = (name, value) =>({
        target: {
            name, value
        }
    })
    return (
      <FormControl>
          <FormControlLabel
          control={<CheckBox
            name={name}
            color="primary"
            checked={value}
            onChange={ e => onChange(defaultEvent(name, e.target.checked))}
          />}
            label={label}
          />
      </FormControl>
    )
}

 
