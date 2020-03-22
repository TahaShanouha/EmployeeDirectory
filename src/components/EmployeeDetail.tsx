import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IEmployeeDetailProps {
  title?: string;
  value?: string | number;
}

const useStyles = makeStyles(
  createStyles({
    info: {
      fontSize: '18px',
    },
    container: {
      padding: '20px 0',
    },
  }),
);

const EmployeeDetail: React.FC<IEmployeeDetailProps> = ({value,title }) => {
  const classes = useStyles();

  return <div className={classes.container}>
      <span className={classes.info}>{title} : {value}</span>
    </div>;
};

export default EmployeeDetail;
