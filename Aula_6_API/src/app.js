"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pessoa_1 = require("./model/pessoa");
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
var app = (0, express_1.default)();
app.use(express_1.default.json());
function helloWorldHandler(req, res) {
    res.status(200).send(" Hello World !!!");
}
app.get('/ api/ hello ', helloWorldHandler);
function calculateAge(req, res) {
    var obj = req.body;
    console.log("Body > > > ", obj);
    var person = new pessoa_1.Person(obj.name, obj.anoNascimento);
    res.status(200).json({ mensagem: "$ { person . nome } tem $ { person . calculaIdade () } anos . " });
}
app.post('/api/age ', calculateAge);
function getIdFromParameter(req, res) {
    var userId = req.query.id;
    res.status(200).json({ mensagem: " Voce solicitou informacoes do usuario com o ID $ {\n   userId } " });
}
app.get('/ api/ user ', getIdFromParameter);
function getIdFromPath(req, res) {
    var userId = req.params.id;
    res.status(200).json({ mensagem: " Voce solicitou informacoes do usuario com o ID $ {\n   userId } " });
}
app.get('/ api/ user /: id ', getIdFromPath);
function portLog() {
    console.log(" Servidor acessivel em : http :\\ localhost : $ { PORT } ");
}
app.listen(PORT, portLog);
