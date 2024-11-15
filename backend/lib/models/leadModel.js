import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    name: {type:String, required: [true, 'name is not defined']},
    email: {type: String, required: [true, 'email is not defined']},
    companyName: {type: String}
}, {timestamps:true})

const leadModel = mongoose.models.Lead || mongoose.model('Lead', leadSchema)

export default leadModel