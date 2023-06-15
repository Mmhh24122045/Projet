const ContactNous = require("../models/ContactNous");



exports.add_contact = async (req, res) => {
    const { 
        name,
        email,
        phone,
        message,

     } = req.body;
    try {
        const newContact= new ContactNous({
            name,
            email,
            phone,
            message,
        })
        await newContact.save(); 
        res.send(newContact);
    }
    catch(error){
        res.send(error.message);
    };
};

exports.get_contact= async(req,res)=>{
    try {
        const contact = await ContactNous.find();
        res.send(contact);
    } catch (error) {
        res.send(error.message);
    }
    
   
}