import autores from "../models/Autores.js";

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id
        
        autores.findById(id, (err, autor) => {
            if(err){
                res.status(400).send({message: `Id de autor não encontrado, ${err.message}`})
            } else {
                res.status(200).send(autor)
            }
        })
    }
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)

        autor.save((err) => {
            if (err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: `Não foi possível realizar a atualização, ${err.message}`})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'autor removido com sucesso.'})
            } else {
                res.status(500).send({message: `Falha ao remover um autor. ${err}`})
            }
        })
    }
}

export default AutorController;