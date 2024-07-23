import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
const app=express()
app.use(express.json())
app.use(cors())
app.use(helmet())

app.get('/',(req,res)=>{
    try {
        res.send('hello world')
    } catch (error) {
        res.statusCode(400).json("error ",error)
    }
})

app.listen(4000,()=>{
    console.log("server is running on port 4000")    
})