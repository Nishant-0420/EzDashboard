const {model, Schema} = require('../connection');   
const contributionSchema = new Schema({
    name: String,
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: String,
    createdAt: {type: Date, default: Date.now},
});
module.exports = model('contribution', contributionSchema);