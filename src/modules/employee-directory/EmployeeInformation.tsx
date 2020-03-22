import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { TableContainer } from '@material-ui/core';
import EnhancedTable from '../../components/EnhancedTable';
import { IEmployee } from '../../models/Employee';
import DataService from '../../services/data-service';
import { IAbstractRecord } from '../../models/general';

const useStyles = makeStyles(
  createStyles({
    employeesContainer: {
      width: '50%',
      display: 'flex',
      textAlign: 'center',
      margin: 'auto',
      marginTop: '100px',
    },
    tableContainer:{
      marginTop: '50px',
    },
    tableTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
  }),
);

const EmployeeInformation: React.FC = ({
}) => {
  const classes = useStyles();

  const [data , setData] = useState<IEmployee[]>();
  const [loader, setLoader] = useState<boolean>();
  const headers = [
    "Employee Name",
    "Email",
    "Phone Number"
  ];
  

  return (
    <div className={classes.employeesContainer}>
      test
    </div>
  );
};

export default EmployeeInformation;
