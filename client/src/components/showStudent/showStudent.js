import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ShowStudent() {

  const [studentlist,setstudentlist] = useState([])

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`).then(() => {
      window.location.reload(false);
    })
  }

  useEffect(() => {
    axios.get('http://localhost:5000/students').then( (allStudents) => {
      setstudentlist(allStudents.data);
    })
  }, [])

  return (
    <>
    <h2>All Students</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">UserId</TableCell>
            <TableCell align="right">Branch</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentlist.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentname}
              </TableCell>
              <TableCell align="right">{student.userid}</TableCell>
              <TableCell align="right">{student.branch}</TableCell>
              <TableCell align="right">{student.department}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" onClick={() => deleteStudent(student._id)}>
                <DeleteIcon />
              </IconButton>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
