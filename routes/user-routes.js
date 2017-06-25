module.exports = function(router) {

    const controllers = require('../controllers/user-controllers.js');

    router.route('/users')
        .get(controllers.findAllUsers)
        .post(controllers.insertUser);

    router.route('/users/:id')
        .get(controllers.findUserById)
        .put(controllers.updateUser)
        .delete(controllers.deleteUser);
}