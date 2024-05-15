var Project = require('../models/projectModel');

exports.getProject = async function (req, res) {
    /*
    #swagger.tags = ['Project']
    #swagger.description = 'Mostra todos os projetos e os usuários atrelados a eles se tiver'
     */
    try {
        const result = await Project.find().populate('assignedTo');
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res) {
     /*
    #swagger.tags = ['Project']
    #swagger.description = 'Insere um novo projeto'
     */
    let project = new Project(
     {
     title: req.body.title,
     description: req.body.description,
     assignedTo: req.body.assignedTo
     }
     );
     try{
        project.save()
        res.status(201).send(project.toJSON())
     } catch(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar projeto.`})
        }
    };

    exports.details = async function (req, res) {
        /*
        #swagger.tags = ['Project']
        #swagger.description = 'Mostra os dados de um projeto especificado pelo id'
        */
        try {
            const result = await Project.findById(req.params.id);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    };

    exports.delete = async function (req, res) {
         /*
        #swagger.tags = ['Project']
        #swagger.description = 'Deleta o projeto pelo id'
        */
        try{
            await Project.findByIdAndDelete(req.params.id)
            res.status(200).send({message: `Deletado com sucesso!`})
        } catch (err) {
            res.status(500).json(err)
        }
    };

    exports.update = async function (req, res) {
         /*
        #swagger.tags = ['Project']
        #swagger.description = 'Atualiza os dados do projeto especificado pelo id'
        */
        let project = new Project()
        try{
            project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.status(200).send({message: `Atualizado com succeso ${project}`})
        } catch(err) {
            res.status(500).json(err)
         }
    };