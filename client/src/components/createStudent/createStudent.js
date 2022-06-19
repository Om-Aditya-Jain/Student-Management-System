import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Create() {


    const [student, setStudent] = useState({
        userid : 0,
        studentname : '',
        branch : '',
        department : '' 
    });


    const createStudent = () => {
        
        axios.post('http://localhost:5000/students', student).then(()=>{
            window.location.reload(false);
        })
        
       
    }

    return (
        <>
        <h2>Create Student</h2>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <TextField id="outlined-basic" label="UserId" variant="outlined" value={student.userid} onChange = {(event)=> {
            setStudent({...student,userid: event.target.value})
        }} />
        <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentname} onChange = {(event)=> {
            setStudent({...student,studentname: event.target.value})
        }} />
        <TextField id="outlined-basic" label="Branch" variant="outlined" value={student.branch} onChange = {(event)=> {
            setStudent({...student,branch: event.target.value})
        }}  />
        <TextField id="outlined-basic" label="Department" variant="outlined" value={student.department} onChange = {(event)=> {
            setStudent({...student,department: event.target.value})
        }} />
        <Button variant="contained" onClick={createStudent}>Create </Button>
        </Box>
        </>
    );
}
