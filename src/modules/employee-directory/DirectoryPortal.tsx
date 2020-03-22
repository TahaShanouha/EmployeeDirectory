import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core';
import DirectoryShell from './DirectoryShell';
import Employees from './Employees';
import EmployeeInformation from './EmployeeInformation';

const useStyles = makeStyles(() =>
  createStyles({
    body: {
      fontFamily: 'Poppins-Regular',
      boxSizing: 'border-box',
      height: '100vh',
      margin: 0,
    },
  }),
);

const DirectoryPortal: React.FC = () => {
  const classes = useStyles();
  return (
    <DirectoryShell classes={{ body: classes.body }}>
      <Switch>
        <Route
          path="/info/:uuid/"
          component={EmployeeInformation}
        />
        <Route
          path="/"
          component={Employees}
        />
        <Route
          path="/directory"
          component={Employees}
        />
      </Switch>
    </DirectoryShell>
  );
};

export default DirectoryPortal;
