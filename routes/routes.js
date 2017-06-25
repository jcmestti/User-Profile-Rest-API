module.exports = function(router) {

    router.route('/')
        .get(function(req, res) {
            res.json({message: "User Profile Rest API"});
        });
}
 
