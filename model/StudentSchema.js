const mongoose=require('mongoose');
const StudentSchema = mongoose.Schema({
      fname:{type:String,required:true}, 
      lname:{type:String},
      email:{type:String,required:true},
      phone:{type:Number,required:true}
  });

    module.exports=mongoose.model('studentmodel',StudentSchema);
    