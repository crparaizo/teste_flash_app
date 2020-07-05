const db = require("../models");
const Empresa = db.registros;

// Create and Save 
exports.createEmpresa = (req, res) => {
  // Validate request
  if (!req.body.nome_empresa) {
    res.status(400).send({ message: "Nome da empresa está vazio!" });
    return;
  }

  const registro = new Empresa({
    nome_empresa: req.body.nome_empresa,
    nome_fantasia: req.body.nome_fantasia,
    cnpj: req.body.cnpj,
    endereco: req.body.endereco,
    funcionarios: [{
      nome_funcionario: req.body.funcionarios.nome_funcionario,
      sobrenome: req.body.funcionarios.sobrenome,
      cpf: req.body.funcionarios.cpf,
      email: req.body.funcionarios.email
    }],
  });

  // Save in the database
  registro
    .save(registro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao criar somente a empresa!"
      });
    });
};

// Update, by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id; //Passando pela url
  // const id = req.body._id; //Passando pelo corpo

  Empresa.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Element with id=${id}. Maybe Element was not found!`
        });
      } else res.send({ message: "Element was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Element with id=" + id
      });
    });
};

// List all, from the database.
exports.findAll = (req, res) => {
  const nome_empresa = req.query.nome_empresa;
  var condition = nome_empresa ? { nome_empresa: { $regex: new RegExp(nome_empresa), $options: "i" } } : {};

  Empresa.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Elements."
      });
    });
};

// Find a single, with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Empresa.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Element with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Element with id=" + id });
    });
};

// Limpar banco de dados
exports.deleteAll = (req, res) => {
  Empresa.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Elements were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Elements."
      });
    });
};