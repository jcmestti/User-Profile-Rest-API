const User = require('../models/user-model.js');

function findAllUsers(req, res) {
    User.find()
    .then(function(users) {
        res.status(200).json(users);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function insertUser(req, res) {
    User.create(req.body)
    .then(function(user) {
        res.status(200).json(user);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function findUserById(req, res) {
    User.findById(req.params.id)
    .then(function(user) {
        res.status(200).json(user);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function updateUser(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(function(user) {
        res.status(200).json(user);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function deleteUser(req, res) {
    User.remove({_id: req.params.id})
    .then(function(user) {
        res.status(200).json(user);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

module.exports = {
    findAllUsers: findAllUsers,
    insertUser: insertUser,
    findUserById: findUserById,
    updateUser: updateUser,
    deleteUser: deleteUser
}