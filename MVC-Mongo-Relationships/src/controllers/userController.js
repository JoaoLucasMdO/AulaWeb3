var User = require('../models/userModel');

exports.getUser = async function (req, res) {
    /*
        #swagger.tags = ['User']
        #swagger.description = 'Mostra todos os usuários'
        */
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res) {
     /*
        #swagger.tags = ['User']
        #swagger.description = 'Insere um novo usuário'
        */
    let user = new User(
        {
            name: req.body.name,
            age: req.body.age
        }
    );

    user.save()
        .then(res.status(201).send(user.toJSON()))
        .catch((err) => {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.` })
        })
};

exports.details = async function (req, res) {
     /*
        #swagger.tags = ['User']
        #swagger.description = 'Mostra o usuário especificado pelo id'
        */
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.delete = async function (req, res) {
    /*
        #swagger.tags = ['User']
        #swagger.description = 'Deleta o usuário especificado pelo id'
        */
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send({message: `Deletado com sucesso!`})
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.update = async function (req, res) {
        /*
        #swagger.tags = ['User']
        #swagger.description = 'Atualiza os daodos do usuário especificado pelo id'
        */
    let user = new User()
    try{
        user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).send({message: `Atualizado com succeso ${user}`})
    } catch(err) {
        res.status(500).json(err)
     }
};