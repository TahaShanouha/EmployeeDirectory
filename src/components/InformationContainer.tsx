import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { IEmployee } from '../models/Employee';
import InformationHeader from './InformationHeader';
import { setName } from '../utils/employee-utils';
import InformationContent from './InformationContent';



interface InformationContainerProps {
  data: IEmployee;
}

const useStyles = makeStyles(
  createStyles({
    informationContainer: {
      display : 'flex',
      height: 'auto',
      margin: 'auto',
      textAlign: 'center',
      minWidth: '500px',
      border: '1px solid',
      borderRadius: '5px',
      backgroundColor: '#f3f3f3',
      padding: '20px',
      flexDirection: 'column',
    },
  }),
);

const InformationContainer: React.FC<InformationContainerProps> = ({data}) => {
  const classes = useStyles();


  return (
    <div className={classes.informationContainer}>
      <InformationHeader 
        picture={data.picture && data.picture.large} 
        name={data.name && setName(data.name)} 
      />
      <InformationContent 
        email={data.email && data.email} 
        phone={data.phone && data.phone}
        location={data.location && data.location}
        age = {data.dob && data.dob.age}
      />
    </div>
  );
}

export default InformationContainer;