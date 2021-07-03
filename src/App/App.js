import React from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import ToDos from '../pages/ToDos/ToDos';

const theme = createMuiTheme({
  palette: {
    primary:{
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "f8324526"
    },
    background:{
      default: "#f4f5fd"
    },
    overrides:{
      MuiAppBar:{
        root:{
          transform: 'translateZ(0)'
        }
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }


})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})



export default function App() {

  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        
      
      <ToDos />
      </div>
      <CssBaseline />           
      </ThemeProvider>
  );
}


