import userModel from "../models/userModels.js";

const homeController = async(req,res)=>{
    try {
        res.render("index"); 
    } catch (error) {
        console.log(error.message);
        
    }
    
}

const contactUserController = async(req,res) => {
    try {
        const data = await userModel({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message,
        });
        if(data){
            await data.save();
            console.log("Your message has been sent succcessfully!");
        }
        
        res.render("index")
        
    } catch (error) {
        console.log(error.message);
        
    }
    
}


export {homeController,contactUserController};