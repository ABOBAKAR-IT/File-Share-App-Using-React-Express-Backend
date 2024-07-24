import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
const app=express()
import upload from './util/multer.js'
import os from 'os'
import fs from 'fs'
import morgan from 'morgan'
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.get('/',(req,res)=>{
    try {
        res.send('hello world')
    } catch (error) {
        res.statusCode(400).json("error ",error)
    }
})

app.post('/upload',upload.fields([{name:'file'}]),(req,res)=>{
    try {
        res.send(upload)
    } catch (error) {
        res.statusCode(400).json("error ",error)
        console.log(error)
    }
})

app.get('/files', (req, res) => {
   
    const path = './uploads/';
    fs.readdir(path, (err, files) => {
      res.json(files);
    });
  });
  
  app.get('/download', (req, res) => {
    const file = `./uploads/${req.query.filename}`;
    res.download(file);
  });
  


app.listen(4000,()=>{
    console.log("server is running on port 4000")    
})