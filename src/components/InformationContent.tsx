import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IEmployeeLocation } from '../models/Employee';
import EmployeeDetail from './EmployeeDetail';
import { setAddress } from '../utils/employee-utils';

interface InformationContentProps {
  email?: string;
  phone?: string;
  location?: IEmployeeLocation;
  gender?: string;
  age?: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    informationContent:{
      textAlign: 'left',
      margin:'auto',
      display:'flex',
      minWidth: '400px',
      padding: '10px',
      flexDirection: 'column',
    },
  }),
);

const InformationContent: React.FC<InformationContentProps> = (
  {
    email,
    phone,
    location,
    gender,
    age
  }) => {
  const classes = useStyles();


  return (
    <div className={classes.informationContent}>
     <EmployeeDetail title="Email" value={email}/>
     <EmployeeDetail title="Phone" value={phone}/>
     <EmployeeDetail title="Gender" value={gender}/>
     <EmployeeDetail title="Age" value={age}/>
     <EmployeeDetail title="Location" value={location && setAddress(location) }/>
   </div>
  );
}

export default InformationContent;