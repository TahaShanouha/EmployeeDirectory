import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

interface IDirectoryShellProps {
  classes?: {  body?: string };
}

const useStyles = makeStyles(
  createStyles({
    body: {
      width: '100%',
    },
  }),
);

const DirectoryShell: React.FC<IDirectoryShellProps> = ({
  classes,
  children,
}) => {
  const shellClasses = useStyles();

  return (
    <>
      <section className={clsx(shellClasses.body, classes ? classes.body : '')}>
        {children}
      </section>
    </>
  );
};

export default DirectoryShell;
