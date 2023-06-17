const { Router } = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller");


// Reto 1
router.get('/apiBooks', usersCtrl.getLibros);





module.exports = router;