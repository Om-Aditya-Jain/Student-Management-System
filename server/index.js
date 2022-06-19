import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

const app = express();

app.use(cors());

app.use(bodyParser.json({limit : "20mb" , extended:true}));
app.use(bodyParser.urlencoded({limit : "20mb" , extended:true}));


const CONNECTION_URL = 'mongodb+srv://om_aditya:aditya123@cluster0.jwnlg.mongodb.net/?retryWrites=true&w=majority';

const PORT = 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser : true, useUnifiedTopology : true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port : 5000` )
)).catch((err) => console.log(err.message));


app.use('/students',studentRoutes);
// console.log(studentRoutes);

// mongoose.set('userFindAndModify',false);

