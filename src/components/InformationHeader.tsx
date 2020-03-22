import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Separator from './Separator';

interface InformationHeaderProps {
  picture?: string;
  name?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    informationHeader:{
      textAlign: 'center',
      margin:'auto',
      display:'flex',
      minWidth: '400px',
      padding: '10px',
      flexDirection: 'column',
    },
    imgContainer:{

    },
    img:{
      borderRadius: '50%',
      width: '150px',
      height: '150px',
    },
    name:{
      fontSize: '24px',
      fontWeight: 'bold',
    },
  }),
);

const InformationHeader: React.FC<InformationHeaderProps> = ({picture,name}) => {
  const classes = useStyles();


  return (
    <div className={classes.informationHeader}>
    <div className={classes.imgContainer}>
      <img className={classes.img} src={picture} />
    </div>
    <div className={classes.name}>{name}</div>
    <Separator />
   </div>
  );
}

export default InformationHeader;