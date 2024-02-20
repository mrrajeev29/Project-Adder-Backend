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

//Create

app.post('/api/project',async (req,res)=>{
    await mongoose.connect("mongodb+srv://ag8244932:Ac68xCCpwKJREF08@cluster0.81z9z64.mongodb.net/?retryWrites=true&w=majority");
    const {protit,prodesc,repolink,prolink}=req.body;
    const project=await Project.create({protit,prodesc,repolink,prolink});
    res.json(project);
})

//Read

app.get('/api/projects',async (req,res)=>{
    await mongoose.connect("mongodb+srv://ag8244932:Ac68xCCpwKJREF08@cluster0.81z9z64.mongodb.net/?retryWrites=true&w=majority");
    const projects=await Project.find();
    res.json(projects);
})

//Delete


app.post("/api/delete", async (req, res) => {
    const { userid } = req.body;
    try {
        await mongoose.connect("mongodb+srv://ag8244932:Ac68xCCpwKJREF08@cluster0.81z9z64.mongodb.net/?retryWrites=true&w=majority");

        const result = await Project.deleteOne({ _id: userid });
        console.log(result);
      res.send({ status: "Ok", data: "Deleted" });
    } catch (error) {
      console.log(error);
    }
  });

//update


app.get('/api/update/:id',(req,res)=>{
    mongoose.connect("mongodb+srv://ag8244932:Ac68xCCpwKJREF08@cluster0.81z9z64.mongodb.net/?retryWrites=true&w=majority");
    const id=req.params.id;
    Project.findById({_id:id})
    .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.put('/api/updateData/:id',(req,res)=>{
    mongoose.connect("mongodb+srv://ag8244932:Ac68xCCpwKJREF08@cluster0.81z9z64.mongodb.net/?retryWrites=true&w=majority");
    const id=req.params.id;
    Project.findByIdAndUpdate({_id:id},{
        protit:req.body.protit, 
        prodesc : req.body.prodesc, 
        repolink : req.body.repolink, 
        prolink : req.body.prolink})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

app.listen(5000);
