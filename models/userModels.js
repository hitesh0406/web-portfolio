import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }


});
const userModel = mongoose.model("user",userSchema);

export default userModel;