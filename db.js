module.exports = function() {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/socialmedia', function(err, res) {
        if(err) {
            console.log(err);
        } else {
            console.log("Successfully Connected to MongoDB")
        }
    });
}