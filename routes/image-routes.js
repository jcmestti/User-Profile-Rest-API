module.exports = function(router) {

    const controllers = require('../controllers/image-controllers.js');

    router.route('/images')
        .get(controllers.findAllImages)
        .post(controllers.insertImage);

    router.route('/images/:id')
        .get(controllers.findImageById)
        .put(controllers.updateImage)
        .delete(controllers.deleteImage);

    router.route('/images/user_images/:id')
        .get(controllers.findUserImages);
}