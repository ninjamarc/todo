import React from 'react';
import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import 'date-fns';

export default function DatePicker(props) {

    const { name, label, value, onChange } = props;
    const defaultEvent = (name, value) =>({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                format="MM/dd/yyyy"
                name={name}
                value={value}
                onChange={date=>onChange(defaultEvent(name, date))}
                />

       </MuiPickersUtilsProvider>
    )
}

