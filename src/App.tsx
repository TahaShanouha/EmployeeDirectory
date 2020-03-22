import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
   makeStyles, createStyles
} from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import Directory from './Directory';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles(
  createStyles({
    toastClass: {
      borderRadius: '4px',
      fontSize: '14px',
      minWidth: '316px',
      minHeight: '50px',
      padding: 15,
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gridGap: '10px',
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
    bodyToastClass: {
      '&.Toastify__toast-body': {
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'auto auto',
        alignItems: 'baseline',
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