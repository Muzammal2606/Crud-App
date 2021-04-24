import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import './table.css'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

function StudentList({student, index,deleteHandler, updateHandler}) {

    return (
        <TableBody>
            
            <StyledTableRow key={student.name} className='row'>
              <StyledTableCell component="th" scope="row">
              {student.name}
              </StyledTableCell>
              <StyledTableCell >{student.roll}</StyledTableCell>
              <StyledTableCell >{student.batch}</StyledTableCell>
              <StyledTableCell >{student.class}</StyledTableCell>
              <StyledTableCell >
              <Button variant="contained" color="secondary" onClick={()=> deleteHandler(index)}>
              Delete
            </Button></StyledTableCell>
            <StyledTableCell >
            <Button variant="contained" color="primary" onClick={()=> updateHandler(student, index)}>
            update item
            </Button>

              </StyledTableCell>
            </StyledTableRow>
            </TableBody>
    )
}


export default StudentList;