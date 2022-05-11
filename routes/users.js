var express = require('express');
var router = express.Router();

const {getUsers, getUserById, createUser, updateUser, deleteUser} = require('../controllers/users');

/* GET users listing. */
router.get('/', getUsers);
router.get('/:id',getUserById);
router.post('/', createUser);
router.put('/:id',updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
