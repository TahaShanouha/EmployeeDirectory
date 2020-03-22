import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { IEmployee } from '../../models/Employee';
import DataService from '../../services/data-service';
import BackButton from '../../components/BackButton';
import { RouteComponentProps } from 'react-router';
import InformationContainer from '../../components/InformationContainer';


interface IEmployeeInformationProps
  extends RouteComponentProps<{ uuid?: string;  }> {

}

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

const EmployeeInformation: React.FC<IEmployeeInformationProps> = ({match}) => {
  const classes = useStyles();
  const [data, setData]  = useState<IEmployee>({login:{uuid:''}});
  const [loader, setLoader] = useState<boolean>();

  useEffect(() => {
    setLoader(true); 
    let dataValue: IEmployee = {login:{uuid:''}};
    if(match.params.uuid){
      DataService.get(
        `https://randomuser.me/api/?uuid=`+match.params.uuid,
      ).then(async response => {
        if (response.ok) {
          const result = await response.json();
         
          if(result){
            dataValue = {...result.results[0]};
          }
          setData(dataValue);
          setLoader(false);
        }
      });
    }
  }, [match.params.uuid]);

  

  return (
    <div className={classes.employeesContainer}>
      <BackButton />
      <InformationContainer data={data} />
    </div>
  );
};

export default EmployeeInformation;
