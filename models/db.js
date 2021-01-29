const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{ useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err){ console.log('MongoDb Connection Successful') }
    else { console.log('Error in connection : ' +err) }
});

require('./employee.model');