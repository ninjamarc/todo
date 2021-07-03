import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useForm, Form } from '../../components/useForm';
import Controls from "../../components/controls/Controls";
import * as taskCategories from "../../categories/taskCategories";




const frequencyItems = [
    {id:'daily', title:'Daily'},
    {id:'weekly', title:'Weekly'},
    {id:'monthly', title:'Monthly'},
    {id:'One time', title:'One time'}
]

const initialValues = {
    id: 0,
    task:'',
    description: '',
    frequency: 'One time',
    taskId:'',
    startDate: new Date(),
    endDate: new Date(),
    isPriority: false,
}


export default function ToDoForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('task' in fieldValues)
            temp.task = fieldValues.task ? "" : "This field is required."
        if ('description' in fieldValues)
            temp.description = fieldValues.description ? "" : "This field is required."
        if ('taskId' in fieldValues)
            temp.taskId = fieldValues.taskId.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange
    } = useForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if(validate()){
            taskCategories.insertCategory(values)
            resetForm()
        }
    }

   
    return (
        
            <Form onSubmit={handleSubmit}>
                <Grid container> 
                    <Grid item xs={6}>
                        <Controls.TextInput
                            name="task"
                            label="Task"
                            value={values.task}
                            onChange={handleInputChange}
                            error={errors.task}
                        />
                        <Controls.TextInput
                            name="description"
                            variant="outlined"
                            label="Description"
                            multiline={true}
                            rows={6}
                            value={values.description}
                            onChange={handleInputChange}
                            error={errors.description}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioInput 
                            name="frequency"
                            value={values.frequency}
                            onChange={handleInputChange}
                            items={frequencyItems}
                            />
                        <Controls.Dropdown
                            name="taskId"
                            label="Task Id"
                            value={values.taskId}
                            onChange={handleInputChange}
                            options={taskCategories.getTaskCategories()}
                            error={errors.taskId}
                            />

                        <Controls.DatePicker
                            name="startDate"
                            label="Start Date"
                            value={values.startDate}
                            onChange={handleInputChange}
                            />

                        <Controls.DatePicker
                            name="endDate"
                            label="End Date"
                            value={values.endDate}
                            onChange={handleInputChange}
                            />

                        <Controls.Check 
                            name="isPriority"
                            label="High Priority"
                            value={values.isPriority}
                            onChange={handleInputChange}
                            />
                            <div>
                                <Controls.Button 
                                    type="submit"
                                    text="Submit" />
                                <Controls.Button 
                                    color="secondary"
                                    text="Reset" 
                                    onClick={resetForm}
                                    />
                            </div>
                        
                    </Grid>

                </Grid>
            </Form>

        
        
    )
}


