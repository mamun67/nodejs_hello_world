const mongoose = require('mongoose');
module.exports = {
    getData: (req, res) => {
       var userSchema = require('../models/userSchema.js');
        var UserModel = mongoose.model('employee', userSchema);
        var info={};
        console.log(req.body);
        UserModel.findOne({name:req.body.name}, (err, result) => {
            if (err) {
                info = {
                    status: false,
                    msg: err
                }

            } else {
                console.log(result);
                
                info = {
                    status: true,
                    model:result
                }
            };
            res.send(info);
            res.end();
        });
    }
}