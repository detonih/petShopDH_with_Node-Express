# Desafio - Sistema de PetShop - Digital House

Desafio proposto como material complementar às aulas presenciais.

### Problema proposto:

"Com base nos novos conhecimentos adquirido na aula de Introdução a Node.js, refatore todo código feito na primeira versão do sistema Petshop DH, com funções no módulo petshop.js, que responda a rotas e receba informações do usuário através do método get HTTP."

## Como utilizar este sistema:

### Donwload

```
git clone https://github.com/detonih/petShopDH_with_Node-Express.git
```

### Instalar dependências

```
npm i
```

### Iniciar servidor

```
npm start
```

### Acessar a rota principal

[principal](http://localhost:3000/)

Ao acessar a rota principal, todas as rotas da aplicação serão exibidas.

### Como utilizar as rotas:

- #### Rota: listar

[listar](http://localhost:3000/pets/listar)

Basta apenas acessar a rota para listar todos os pets existentes no banco de dados (um array de objetos).

- #### Rota: adicionar

[adicionar](http://localhost:3000/pets/adicionar)

Ao acessar esta rota, é necessário passar 7 (sete) parâmetros diretamente como URI. São eles:

- nome
- tipo
- raca
- idade
- genero
- vacinado
- servicos

Exemplo:

[exemplo](http://localhost:3000/pets/adicionar/handu/cao/canino/15/M/nao/banho,tosa)

- #### Rota: buscar

[buscar](http://localhost:3000/pets/buscar)

Busca um pet em específco passando como parâmetro o nome do pet.

Exemplo:

[exemplo](http://localhost:3000/pets/buscar/ada)

- #### Rota: vacinados 

[vacinados](http://localhost:3000/pets/vacinados)

Basta apenas acessar a rota e todos os pets vacinados e não vacinados serão exibidos.

- #### Rota: vacinar

[vacinar](http://localhost:3000/pets/vacinar)

Efetua a vacinação de um pet passado por nome como parâmetro na rota.

Exemplo:

[exemplo](http://localhost:3000/pets/vacinar/costelinha)

- #### Rota: campanha

[campanha](http://localhost:3000/pets/campanha)

Vacina todos os pets no banco de dados.

- #### Rota: banho

[banho](http://localhost:3000/pets/banho)

Efetua o serviço de banho no pet especificado como parâmetro na rota.

Exemplo:

[exemplo](http://localhost:3000/pets/banho/batman)

- #### Rota: tosar

[tosar](http://localhost:3000/pets/tosar)

Efetua o serviço de tosa no pet especificado como parâmetro na rota.

Exemplo:

[exemplo](http://localhost:3000/pets/tosar/batman)

- #### Rota: aparar

[aparar](http://localhost:3000/pets/aparar)

Efetua o serviço de aparar as unhas no pet especificado como parâmetro na rota.

Exemplo:

[exemplo](http://localhost:3000/pets/aparar/batman)

- #### Rota: atender

[atender](http://localhost:3000/pets/atender)

Faz o atendimento para um serviço em específico e efetua o pagamento do mesmo. O nome do pet e o nome do serviço deve ser passado como parâmetro na URI.

Exemplo:

[exemplo](http://localhost:3000/pets/atender/ada/banho)