
const mongoose = require('mongoose');
const url='mongodb+srv://nishant:nishant69@cluster0.apvlvmv.mongodb.net/EzdashboardDB?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log( err,"Error in connecting to MongoDB"));

module.exports = mongoose;