const mongoose=require('mongoose')

const beneficiarySchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,enum:['male','female','other']},
    addt_type:{type:String,enum:['Alcohol','Cannabis','Smoking','Opium','Others']},
    center_id:{type:String, required: true},
    state:{type:String, required:true},
    district:{type:String, required: true}
})

const beneficiary= mongoose.model('Beneficiary',beneficiarySchema);

module.exports = beneficiary;