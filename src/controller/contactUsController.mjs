import contactusService from "../service/contactUsService.mjs";

const handlePlan=async(req,res,serviceFunction)=>{
    try{
        const clientData=req.body
        console.log("Received Data in Controller", clientData);

        if(!clientData){
            console.log("Client Data Not Found");
            return res.status(400).send({status:400, message:"Client Data Not Found"})
        }

        const result=await serviceFunction(clientData)
        if(result){
            return res.status(200).send({status:200, message:"Client Data Added Successfully",})
        }
        else{
            return res.status(500).send({status:500, message:"Client Data Not Added Successfully"})
        }
    }
    catch(e){
        console.log(e.message);
    }

}

const contactUs=async(req,res)=>{
    await handlePlan(req,res,contactusService)
}
export default contactUs