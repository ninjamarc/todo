import React from 'react';
import { AppBar, InputBase, makeStyles } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { ChatBubbleOutline, NotificationsNone, PowerSettingsNewOutlined } from '@material-ui/icons';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';



//CSS rules
const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor: '#fff',
        transform: 'translateZ(0)'
    },
    searchInput:{
        opacity: '0.6',
        padding: '8px 8px',
        fontSize: '1.5rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
         },
         '& .MuiSvgIcon-root' : {
             marginRight: theme.spacing(2)
         }
    }
}))



export default function Header() {

    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="sticky" 
        elevation={2}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase 
                        className={classes.searchInput}
                        placeholder="Search topics"
                        startAdornment={<SearchSharpIcon fontSize="large" color="primary"/>}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNone fontSize="large"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutline fontSize="large"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <PowerSettingsNewOutlined />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}


