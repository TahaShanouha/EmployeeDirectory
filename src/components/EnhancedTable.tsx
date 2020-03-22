import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IEmployee, IEmployeeName } from '../models/Employee';
import { TablePagination } from '@material-ui/core';


export interface IEnhancedTableProps {
  headers: string[];
  data?: IEmployee[];
  rowsPerPage?: number;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    boxShadow:
    '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
  },
  table: {
    minWidth: 650,
  },
  paper: {
    width: '100%',
    margin: '0',
    boxShadow:
      '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
  },
});

function createData(name: string, email: string, cell: string) {
  return { name, email, cell };
}

const tempdata = [
  createData('Frozen yoghurt', '159@sad.com', '2213213'),
  createData('Frozen yoghurt', '159@sad.com', '2213213'),
  createData('Frozen yoghurt', '159@sad.com', '2213213'),
  createData('Frozen yoghurt', '159@sad.com', '2213213'),
];

const setName = (name: IEmployeeName) => {
  return name.title + " " + name.first + " " + name.last;
};


const EnhancedTable: React.FC<IEnhancedTableProps> = ({
  headers,
  data,
}) => {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const [page, setPage] = React.useState(0);


  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };



  const handleSearchChange = () => {
    
  };

  return (
    <Paper className={classes.root}>
      <Paper className={classes.paper}>
          <>
            
          </>
      </Paper>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableCell align="center" key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
             {data && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(emp => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={emp.email}>
                   <TableCell component="th" align="center" scope="row">
                {emp.name && setName(emp.name)}
              </TableCell>
              <TableCell align="center">{emp.email}</TableCell>
              <TableCell align="center">{emp.phone}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data && data.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EnhancedTable;