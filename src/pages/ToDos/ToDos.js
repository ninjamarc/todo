import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ToDoForm from "./ToDoForm";
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import useTable from "../../components/useTable";
import * as taskCategories from "../../categories/taskCategories";
import Controls from "../../components/controls/Controls";
import { Search } from '@material-ui/icons';



const useStyles = makeStyles(theme => ({
    pageContent :{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }

}))

const headCells = [
    { id: 'task', label: 'Name' },
    { id: 'description', label: 'Description' },
    { id: 'taskId', label: 'Category', disableSorting: true }
]

export default function ToDos() {
    const classes = useStyles();
    const [records, setRecords] = useState(taskCategories.getAllcategories())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; }})

    const {
    TbleContainer,
    TblHead,
    TblePagination,
    recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                    else
                    return items.filter(x => x.task.toLowerCase().includes(target.value))
            }
        })
    }


    return (
        <>
            <PageHeader 
                title="Create a new task"
                subTitle="Enter a task and description below"
                icon ={<GetAppIcon fontSize="large"  />}
            />
            <Paper className={classes.pageContent}>
            <ToDoForm /> 
            <Toolbar>
                <Controls.TextInput
                    label="Search Tasks"
                    className={classes.searchInput}
                    InputProps={{
                            startAdornment: (<InputAdornment postion="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                
            </Toolbar>
                <TbleContainer>
                    <TblHead />
                    <TableBody>
                        {
                        recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.task}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.tasks}</TableCell>
                            </TableRow>))
                        }
                    </TableBody>

                </TbleContainer>
                <TblePagination />
            </Paper>
        </>
    )
}

