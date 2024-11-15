import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {type:String, required: [true, 'name is not defined'],},
    email: {type: String, required: [true, 'email is not defined']},
    companyName: {type: String, required: [true, 'company name is not defined']},
    otherDetails: { type: String },
}, {timestamps:true})

const contactModel = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default contactModel