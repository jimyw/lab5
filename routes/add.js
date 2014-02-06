var data = require("../data.json");

exports.addFriend = function(req, res) {    
    var name = req.query.name;
    var description = req.query.description;
    var newFriend = {
            "name": name,
            "description": description,
            "imageURL": "http://lorempixel.com/400/400/people"
        };
//    console.log(newFriend);
    data["friends"].push(newFriend);    // add newFriend to the friends database
    res.render('add',data);
};
