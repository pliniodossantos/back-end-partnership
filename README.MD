Backend desenvolvido como protótipo para a empresa plugowtech em parceria com a DNC, utilizando Typescript, Node, Typeorm e Postgress.

Utilize o "npm install" para instalar as dependências do projeto.

".env.example" contém todos os campos necessários para informar os parâmetros do banco de dados, "secrets" para tokens de autenticação.

"EMAIL_USER" e "EMAIL_PASS" para configurar envio de email automático.

"ADM_Email" e "ADM_KEY" para escolher o e-mail administrador principal e palavra-chave para a criação de um novo admin.

Para criar as migrações no banco de dados, utilize o comando "npm run migration:run"

Descritivo de rotas:

-------------Customers (Cliente Principal da aplicação, conhecido também como "profissional"):-------------
/customers método POST: cria um novo cliente a partir dos seguintes campos: "name"(string), "email"(string), "cpfOrCnpj"(string), "password"(string), "birthday"(date), "complement"(string).

/customers/id(enviar o id do cliente) método GET: Retorna todos os dados do cliente, necessário token de autenticação, cada cliente retorna apenas os seus próprios dados, dados dos demais clientes protegidos por autenticação.

/customers/id(enviar o id do cliente) método PUT: edita os seguintes campos do cliente: "name", "email", "cpfOrCnpj", "birthday" e "complement", necessário token de autenticação.

/customers/state/:id (enviar o id do cliente) método PATCH: edita o campo "active", necessário token de autenticação.

/customers/orders/:id (enviar o id do cliente) método GET: retorna todos os pedidos referentes a este cliente, necessário token de autenticação.

/customers/password/update/:id (enviar o id do cliente) método PATCH: atualiza a senha do cliente utilizando os seguintes campos: "oldPassword" (informe a senha antiga), "newPassword" (informe a nova senha), "newPassword_confirmation" (informe novamente a nova senha), necessário token de autenticação.

/customers/password/forgot método POST: envia para o e-mail de cadastro do cliente, token para atualização de senha, caso a senha antiga tenha sido esquecida.

/customers/password/reset método PATCH: altera a senha do cliente utilizando o token recebido por email: "token", "password" e "password_confirmation".

/customers/sessions método POST: retorna o token de autenticação, informando os dados do cliente nos seguintes campos: "cpfOrCnpj" e "password".

-------------Stores: -------------
/stores método POST: cria uma nova Loja a partir dos seguintes campos: "name"(string), "email"(string), "cnpj"(string), "password"(string) e "birthday"(date).

/stores/id(enviar o id da loja) método GET: Retorna todos os dados da loja, necessário token de autenticação, cada loja retorna apenas os seus próprios dados, dados das demais lojas protegidos por autenticação.

/stores/id(enviar o id da loja) método PUT: edita os seguintes campos da loja: "name", "email", "cnpj" e "birthday", sendo necessário token de autenticação.

/stores/state/:id (enviar o id da loja) método PATCH: edita o campo "active", necessário token de autenticação.

/stores/orders/:id (enviar o id da loja) método GET: retorna todos os pedidos referentes a esta loja, necessário token de autenticação.

/stores/password/update/:id (enviar o id da loja) método PATCH: atualiza a senha da loja utilizando os seguintes campos: "oldPassword" (informe a senha antiga), "newPassword" (informe a nova senha), "newPassword_confirmation" (informe novamente a nova senha), necessário token de autenticação.

/stores/password/forgot método POST: envia para o e-mail de cadastro da loja, token para atualização de senha, caso a senha antiga tenha sido esquecida.

/stores/password/reset método PATCH: altera a senha da loja utilizando o token recebido por email: "token", "password" e "password_confirmation".

/stores/sessions método POST: retorna o token de autenticação, informando os dados da loja nos seguintes campos: "cnpj" e "password".

-------------Consulants (Consultor): -------------
/consulants método POST: cria um novo consultor a partir dos seguintes campos: "name"(string), "email"(string), "cpf"(string), "password"(string), "birthday"(date) e "cnpjStore"(string).
 
/consulants/id(enviar o id do consultor) método GET: Retorna todos os dados do consultor, necessário token de autenticação, cada consultor retorna apenas os seus próprios dados, dados dos demais consultores protegidos por autenticação.
 
/consulants/id (enviar o id do consultor) método PUT: edita os seguintes campos do consultor: "name", "email", "cpf" e "birthday", sendo necessário token de autenticação.
 
/consulants/state/:id (enviar o id do consultor) método PATCH: edita o campo "active", necessário token de autenticação.
 
/consulants/storeupdate/:id (enviar o id do consultor) método PATCH: edita o campo "cnpjStore"(string), necessário token de autenticação.
 
/consulants/orders/:id (enviar o id do consultor) método GET: retorna todos os pedidos referentes a este consultor, necessário token de autenticação.
 
/consulants/orders/:id (enviar o id do consultor) método POST: cria um pedido com os seguintes campos: "customerCpfOrCnpj"(string), "points_customer"(number) e "obs"(string).

/consulants/password/update/:id (enviar o id do consultor) método PATCH: atualiza a senha do consultor utilizando os seguintes campos: "oldPassword" (informe a senha antiga), "newPassword" (informe a nova senha), "newPassword_confirmation" (informe novamente a nova senha), necessário token de autenticação.
 
/consulants/password/forgot método POST: envia para o e-mail de cadastro do consultor, token para atualização de senha, caso a senha antiga tenha sido esquecida.
 
/consulants/password/reset método PATCH: altera a senha do consultor utilizando o token recebido por email: "token", "password" e "password_confirmation".
 
/stores/sessions método POST: retorna o token de autenticação, informando os dados do consultor nos seguintes campos: "cpf" e "password".
 
 
-------------Adm: -------------
/admin/send método POST: Dispara um e-mail para o e-mail de administrador principal contendo o "keyAcess" para criar um novo adm.

/admin/create método POST: cria um novo admin a partir dos seguintes campos: "name"(string), "email"(string), "cpf"(string), "password"(string) e "KeyAcess"(string).

/admin/id(enviar o id do admin) método GET: Retorna todos os dados do admin, necessário token de autenticação, cada admin retorna apenas os seus próprios dados, dados das demais admins protegidos por autenticação.

/admin/id(enviar o id do admin) método PUT: edita os seguintes campos do admin: "name", "email" e"cpf", sendo necessário token de autenticação.

/admin/:id (enviar o id do admin) método DELETE: deleta o admin, necessário token de autenticação.

/admin/password/update/:id (enviar o id do admin) método PATCH: atualiza a senha do admin utilizando os seguintes campos: "oldPassword" (informe a senha antiga), "newPassword" (informe a nova senha), "newPassword_confirmation" (informe novamente a nova senha), necessário token de autenticação.

/admin/password/forgot método POST: envia para o e-mail de cadastro do admin, token para atualização de senha, caso a senha antiga tenha sido esquecida.

/admin/password/reset método PATCH: altera a senha do admin utilizando o token recebido por email: "token", "password" e "password_confirmation".

/admin/sessions método POST: retorna o token de autenticação, informando os dados do admin nos seguintes campos: "cpf" e "password".

-------------Adm:Customer-------------
/admin/customers método GET: Retorna para o adm, todos os clientes cadastrados.

/admin/customers método PUT: Permite ao adm editar um cliente: "id"(string), "name"(string), "email"(string), "cpfOrCnpj"(string), "birthday"(date), "complement"(string).

/admin/customers método DELETE: permite ao admin deletar o cliente: "id"(string).

/admin/customers/state método PATCH: permite ao admin editar o estado de um cliente: "id"string, "active"(boolean).

-------------Adm:Store-------------
/admin/stores método GET: Retorna para o admin todas as lojas cadastradas.

/admin/stores método PUT: Permite ao admin editar uma loja: "id"(string), "name"(string), "email"(string), "cnpj"(string), "birthday"(date).

/admin/stores método DELETE: permite ao admin deletar a loja: "id"(string).

/admin/stores/state método PATCH: permite ao admin editar o estado de uma loja: "id"string, "active"(boolean).

-------------Adm:Consulant-------------
/admin/consulants método GET: Retorna para o admin todos os consultores cadastrados.

/admin/consulants método PUT: Permite ao admin editar um consultor: "id"(string), "name"(string), "email"(string), "cpf"(string), "birthday"(date).

/admin/consulants método DELETE: permite ao admin deletar o consultor: "id"(string).

/admin/consulants/state método PATCH: permite ao admin editar o estado de um consultor: "id"string, "active"(boolean).

/admin/consulants/storeupdate método PATCH: permite ao admin editar a loja de um consultor: "id"string, "cnpjStore"(string).

-------------Adm:Order-------------
/admin/order método GET: Retorna para o admin todos os pedidos feitos.

/admin/order/create método POST: Permite ao admin criar um pedido: "id"(string, inserir o id do consultor), "customerCpfOrCnpj"(string), "points_customer"(number), "obs"(string).

/admin/order/approve método PATCH: permite ao admin aprovar um pedido: "id"(string), "pending"(boolean).

/admin/order método DELETE: permite ao admin deletar um pedido: "id"string.

/admin/order/consulant método POST: permite ao admin listar todos os pedidos de um consultor: "id"(string).

/admin/order/customer método POST: permite ao admin listar todos os pedidos de um cliente: "id"(string).

/admin/order/store método POST: permite ao admin listar todos os pedidos de uma loja: "id"(string).
