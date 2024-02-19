const express=require("express");
const cors=require('cors');

const Project=require('./model/Project');
const mongoose=require("mongoose");
const app=express();


app.use(cors());
app.use(express.json());


app.get('/api/test',(req,res)=>{
    res.json("ok");
    console.log("connected");
})

app.post('/api/project',async (req,res)=>{
    await mongoose.connect("mongodb+srv://ag8244932:Ac68xCCpwKJREF08@cluster0.81z9z64.mongodb.net/?retryWrites=true&w=majority");
    const {protit,prodesc,repolink,prolink}=req.body;
    const project=await Project.create({protit,prodesc,repolink,prolink});
    res.json(project);
})

app.get('/api/projects',async (req,res)=>{
    await mongoose.connect("mongodb+srv://ag8244932:Ac68xCCpwKJREF08@cluster0.81z9z64.mongodb.net/?retryWrites=true&w=majority");
    const projects=await Project.find();
    res.json(projects);
})


app.listen(5000);