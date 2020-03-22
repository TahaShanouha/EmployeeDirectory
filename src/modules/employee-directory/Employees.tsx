import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { TableContainer } from '@material-ui/core';
import EnhancedTable from '../../components/EnhancedTable';
import { IEmployee } from '../../models/Employee';
import DataService from '../../services/data-service';
import { IAbstractRecord } from '../../models/general';
import { toast } from 'react-toastify';

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

const Employees: React.FC = ({
}) => {
  const classes = useStyles();

  const [data , setData] = useState<IEmployee[]>();
  const [loader, setLoader] = useState<boolean>();
  const headers = [
    "Employee Name",
    "Email",
    "Phone Number"
  ];
  

  useEffect(() => {
    setLoader(true); 
    let dataValue: IEmployee[] = [];
    DataService.get(
      `https://randomuser.me/api/?results=100`,
    ).then(async response => {
      if (response.ok) {
        const result = await response.json();
       
        if(result){
          dataValue = Object.values(result.results);
        }
        toast.success("Employees retrieved successfully");
      }
      else{
        toast.error("Error retrieving employees")
      }
      setData(dataValue);
   
      setLoader(false);
    });
  }, []);

  return (
    <>
    {loader ? 
    <></>
    : 
    <div className={classes.employeesContainer}>
      <EnhancedTable data={data} headers={headers}/>
    </div>
    }
   
    </>
  );
};

export default Employees;
