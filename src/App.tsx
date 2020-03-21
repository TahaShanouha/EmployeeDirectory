import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  withStyles, makeStyles, createStyles, MuiThemeProvider
} from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import Directory from './Directory';
import DataService from './services/data-service';


const useStyles = makeStyles(
  createStyles({
    toastClass: {
      borderRadius: '4px',
      fontSize: '14px',
      minWidth: '316px',
      '&.Toastify__toast--success': {
        backgroundColor: '#78B33A',
      },
      '&.Toastify__toast--info': {
        backgroundColor: '#425C9A',
      },
      '&.Toastify__toast--error': {
        backgroundColor: '#F81313',
      },
      '&.Toastify__toast--warning': {
        backgroundColor: '#425C9A',
      },
    },
  }),
);


const App: React.FC = () => {
  const classes = useStyles();

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="*" component={Directory} />
      </Switch>
    </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
        toastClassName={classes.toastClass}
      />
    </>
  )
};

export default App;