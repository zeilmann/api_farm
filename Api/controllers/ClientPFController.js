var ClientPF = require("../models/ClientPF");




class ClientPFController {

    async listAll(req, res){
        var users = await ClientPF.findAll();
        res.json(users);
        console.log("Requisitado");
    }

    async remove(req, res){
        var id = req.params.id;

        var result = await ClientPF.delete(id);

        if(result.status){
            res.status(200);
            res.send("Tudo OK!");
            console.log("ENVIADO");
        }else{
            res.status(406);
            res.send(result.err);
        }
    }

    async findUser(req, res){
        var id = req.params.id;
        var user = await ClientPF.findById(id);
        if(user == undefined){
            res.status(404);
            res.json({});
        }else{
            res.status(200)
            res.json(user);
        }
    }

    async create(req, res){
        var {Ativo,NomeCompleto,CPF,Logradouro,Numero,Complemento,Bairro,UF,Municipio,CEP,Telefone,Celular,WhatsApp,Email,Obs,CustomersPFcol} = req.body;
       
        await ClientPF.new(Ativo,NomeCompleto,CPF,Logradouro,Numero,Complemento,Bairro,UF,Municipio,CEP,Telefone,Celular,WhatsApp,Email,Obs,CustomersPFcol);
        
        res.status(200);
        res.send("Tudo OK!");
    }


}

module.exports = new ClientPFController();