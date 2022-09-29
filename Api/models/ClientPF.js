var knex = require("../database/connection");


class ClientPF {


async new(Ativo,NomeCompleto,CPF,Logradouro,Numero,Complemento,Bairro,UF,Municipio,CEP,Telefone,Celular,WhatsApp,Email,Obs,CustomersPFcol){
    try{
        
        await knex.insert({Ativo,NomeCompleto,CPF,Logradouro,Numero,Complemento,Bairro,UF,Municipio,CEP,Telefone,Celular,WhatsApp,Email,Obs,CustomersPFcol}).table("customerspf");
    }catch(err){
        console.log(err);
    }
}   

async findById(id){
    try{
        var result = await knex.select(["Ativo","NomeCompleto","CPF","Logradouro","Numero","Complemento","Bairro","UF","Municipio","CEP","Telefone","Celular"
        ,"WhatsApp","Email","Obs","CustomersPFcol"]).where({Id:id}).table("customerspf");
        
        if(result.length > 0){
            return result[0];
        }else{
            return undefined;
        }

    }catch(err){
        console.log(err);
        return undefined;
    }
}


async findAll(){
    try{
        var result = await knex.select(["Ativo","NomeCompleto","CPF","Logradouro","Numero","Complemento","Bairro","UF","Municipio","CEP","Telefone","Celular"
        ,"WhatsApp","Email","Obs","CustomersPFcol"]).table("customerspf");
        return result;
    }catch(err){
        console.log(err);
        return [];
    }
}


async delete(id){
    var user = await this.findById(id);
    if(user != undefined){

        try{
            await knex.delete().where({Id: id}).table("customerspf");
            return {status: true}
        }catch(err){
            return {status: false,err: err}
        }
    
    }else{
        return {status: false,err: "Nada a ser deletado."}
    }
}

}

module.exports = new ClientPF();