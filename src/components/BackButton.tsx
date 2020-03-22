import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginTop: 0,
      },
    },
  }),
);

const BackButton: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={()=>window.location.href="/"} variant="outlined" color="primary" href="#outlined-buttons">
         Back
      </Button>
    </div>
  );
}

export default BackButton;