1º passo: instalar NodeJs e MongoDb na sua máquina.

2º passo: dentro do software MongoDb, abrir uma conexão local e criar um database com o nome de “crparaizo_db” e uma collection com o nome “registros”.

3º passo: entrar na pasta “flash_server”, abrir o cmd e executar o comando “node server.js”.

4º passo: entrar na pasta “flash_app”, abrir o cmd e executar o comando “npm start”.

5º passo: utilizar a plataforma: somente as seguintes funcionalidades então habilitadas:

	•	Criar empresas;

	•	Listar empresas e visualizar informações inseridas;

	•	Remover todas as empresas cadastradas;

*Não há como alterar os dados depois de inseridos!

*Na pasta “Postman”, há uma coleção com os dados testados no app Postman com os métodos Get, Get by Id, Post, Delete e Put.


Site usado como referência para este código:
https://bezkoder.com/react-node-express-mongodb-mern-stack/


		Avisos:

Não foi feito a estilização da lista em forma de tabela utilizando o Ant Design.

Além disso, por algum problema ainda não identificado, provavelmente de implementação, não está sendo adicionado os funcionários a determinada empresa no Front-End / React, entretando
,via Postman, isso está funcionando perfeitamente.
