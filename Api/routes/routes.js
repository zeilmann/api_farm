var express = require("express");
const ClientPFController = require("../controllers/ClientPFController");
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require("../controllers/UserController");
var AdminAuth = require("../middleware/AdminAuth");


// ROTAS DE LOGIN E CADASTRO DE USUARIO
router.get('/', HomeController.index);
router.post('/user', UserController.create);
router.get("/user",AdminAuth,UserController.index);
router.get("/user/:id",AdminAuth,UserController.findUser);
router.put("/user",AdminAuth,UserController.edit);
router.delete("/user/:id",AdminAuth,UserController.remove);
router.post("/recoverpassword",UserController.recoverPassword);
router.post("/changepassword",UserController.changePassword);
router.post("/login",UserController.login);

//ROTAS DE CADASTRO DE CLIENTES PF E PJ
//ADCIONA NO BANCO DE DADOS customerspf
router.post("/addclientPF",AdminAuth,ClientPFController.create);
router.post("/addclientPFF",ClientPFController.create);

//LISTA TODOS OS VALORES NO BANCO DE DADOS customerspf
router.get("/clientPF",AdminAuth,ClientPFController.listAll);
router.get("/clientPFF",ClientPFController.listAll);


router.get("/clientPF/:id",AdminAuth,ClientPFController.findUser);
router.get("/clientPFF/:id",ClientPFController.findUser);
router.delete("/deleteClientPF/:id",AdminAuth,ClientPFController.remove);

module.exports = router;