module.exports = app => {
  const registros = require("../controllers/controller.js");

  var router = require("express").Router();

  // Criar uma empresa - infos básicas
  router.post("/", registros.createEmpresa);

  // Cria funcionários pelo id da empresa (atualizar registro)
  router.put("/:id", registros.update); //Passando pela url
  // router.put("/funcionarios", registros.update); //Passando pelo corpo

  // Listar as informações de uma empresa
  router.get("/:id", registros.findOne);

  

  //SOMENTE PARA TESTE:

  // Listas das as empresas e seus respectivos funcionários
  router.get("/", registros.findAll);

  // Limpar banco de dados
  router.delete("/", registros.deleteAll);

  app.use('/api/registros', router);
};