import dataSource from "../infrastructure/psql.mjs";

const contactRepository=dataSource.getRepository('contactUs')


const contactRepo=async(clientData)=>{
    try{
            const data=contactRepository.create(clientData)
            const result=await contactRepository.save(data)
            return result
    }
    catch(e){
        console.log("error")
    }
}

export default contactRepo