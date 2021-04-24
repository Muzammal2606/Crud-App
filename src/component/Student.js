import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import { data } from "./studentData";
import StudentList from './studentList';
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
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


function Students() {
    const classes = useStyles()

    const [students, setStudents] = useState(data)
    const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("")
    const [Batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")
    const [stuClass, setStuClass] = useState("")
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)





    const deleteHandler = (index) => {
        
        let newStudents = students.filter((student, i) => {
            if (i !== index) {
                return student;
            }
        });

        setStudents([...newStudents]);

    }

    const updateHandler = (student, index) => {

        setUpdatedIndex(index);
        setName(student.name);
        setStuClass(student.class);
        setRoll(student.roll);
        setBatch(student.batch);
        setFlag(true);

    }

    const ctaHandler = () => {
        setMessage("")

        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }
        
            setStudents([...students, student]);
            setName("");
            setStuClass("");
            setRoll("");
            setBatch("");

        }
        else {
            setMessage(" Found few of params empty! Params can't be empty.")
        }

    }


    const ctaUpdateHandler = () => {
        setMessage("")

        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }

            let updateStudents = students.map((stu,index) => {
                if (updatedIndex === index) {
                    return student
                }
            else {
            return stu;
        }
    })

    setStudents([...updateStudents]);
    setName("");
    setStuClass("");
    setRoll("");
    setBatch("");
    setFlag(false);

}
    else {
    setMessage(" Found few of params empty! Params can't be empty.")
}
    }




return (
    <div>
        <h1 className='heading'>Enter Data</h1>
        <div className='add'>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={name} name="name" className='add1' onChange={(e) => setName(e.target.value)} />
        <TextField id="outlined-basic" label="Batch" variant="outlined" value={Batch} name="s" className='add1' onChange={(e) => setBatch(e.target.value)} />
        <TextField id="outlined-basic" label="Roll No" variant="outlined" value={roll} className='add1' onChange={(e) => setRoll(e.target.value)} />
        <TextField id="outlined-basic" label="Class" variant="outlined" value={stuClass} className='add1' onChange={(e) => setStuClass(e.target.value)} />
        {flag ?

            <Button variant="contained" color="primary"onClick={ctaUpdateHandler} className='bton'>
            update
            </Button>
            :
            
            <Button variant="contained" color="primary"onClick={ctaHandler} className='bton'>
            Submit
            </Button>
        }

        <p style={{ backgroundColor: "red", color: 'white' }}>
            {
                errorMessage
            }
        </p>
        </div>
        <hr />
        <h1 className='heading'>List of Students</h1>
        <TableContainer component={Paper} className='table'>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className='head'>
          <TableRow className='row'>
            <StyledTableCell className='head'>Name</StyledTableCell>
            <StyledTableCell  className='head'>Roll No</StyledTableCell>
            <StyledTableCell  className='head'>Batch</StyledTableCell>
            <StyledTableCell  className='head'>Class</StyledTableCell>
            <StyledTableCell  className='head'>Delete</StyledTableCell>
            <StyledTableCell  className='head'>Edit</StyledTableCell>
          </TableRow>
        </TableHead>

        {
                students.map((item, index) => {
                    return <StudentList index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
                })
            }
      </Table>
    </TableContainer>
    
        
    </div>
)
}

export default Students;