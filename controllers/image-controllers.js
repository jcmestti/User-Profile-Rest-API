const Image = require('../models/image-model.js');

function findAllImages(req, res) {
    Image.find()
    .then(function(images) {
        res.status(200).json(images);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function insertImage(req, res) {
    Image.create(req.body)
    .then(function(user) {
        res.status(200).json(user);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function findImageById(req, res) {
    Image.findById(req.params.id)
    .then(function(image) {
        res.status(200).json(image);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function updateImage(req, res) {
    Image.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(function(image) {
        res.status(200).json(image);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function deleteImage(req, res) {
    Image.remove({_id: req.params.id})
    .then(function(image) {
        res.status(200).json(image);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function findUserImages(req, res) {
    Image.find({creator: req.params.id})
    .then(function(image) {
        res.status(200).json(image);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

module.exports = {
    findAllImages: findAllImages,
    insertImage: insertImage,
    findImageById: findImageById,
    updateImage: updateImage,
    deleteImage: deleteImage,
    findUserImages: findUserImages
}