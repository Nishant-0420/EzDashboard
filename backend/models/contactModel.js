const {model, Schema} = require('../connection');
const contantSchema = new Schema({
    username: String,
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: String,
    createdAt: {type: Date, default: Date.now},
});
module.exports = model('contact', contantSchema);