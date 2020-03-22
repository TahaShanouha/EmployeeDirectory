import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { CSSProperties } from 'react';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISeparatorProps {
  className?: string;
  style?: CSSProperties;
}

const useStyles = makeStyles(
  createStyles({
    separator: {
      background: `rgba(0, 0, 0, 0.47) 0% 0% no-repeat padding-box`,
      height: 5,
      width: '100%',
      margin: '10px 0',
    },
  }),
);

const Separator: React.FC<ISeparatorProps> = ({ className, style }) => {
  const classes = useStyles();

  return <div className={clsx(classes.separator, className)} style={style} />;
};

export default Separator;
