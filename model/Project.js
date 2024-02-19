const mongoose=require("mongoose");
const {Schema,model}=mongoose;

const ProjectSchema=new Schema({
    protit:{type: String,required:true},
    prodesc:{type:String,required:true},
    repolink:{type:String,required:true},
    prolink:{type:String,required:true},
});

const ProjectModel=model('Project',ProjectSchema);
module.exports=ProjectModel;