const { getAll, create, remove } = require('../controllers/productImg');
const express = require('express');
const upload = require('../utils/multer')
const verifyJWT = require('../utils/verifyJWT');
const routerProductImg = express.Router();

routerProductImg.route('/')
    .get(verifyJWT,getAll)
    .post(upload.single('image'), verifyJWT,create)

routerProductImg.route('/:id')
    .get(verifyJWT,remove)

module.exports = routerProductImg;