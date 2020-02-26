# Desafio - Sistema de PetShop - Digital House

Desafio proposto como material complementar às aulas presenciais.

### Problema proposto:

"Com base nos novos conhecimentos adquirido na aula de Introdução a Node.js, refatore todo código feito na primeira versão do sistema Petshop DH, com funções no módulo petshop.js, que responda a rotas e receba informações do usuário através do método get HTTP."

## Como utilizar este sistema:

### Abra o terminal e crie uma pasta (ou faça da forma que preferir)

```
mkdir petShopDH
```

### Acesse a pasta

```
cd petShopDH
```

### Faça o download do reposítorio

```
git clone https://github.com/detonih/petShopDH_with_Node-Express.git
```

### Instale as dependências

```
npm i
```

### Inicie o servidor

```
npm start
```

### Acessar a rota principal:

[http://localhost:3000/](http://localhost:3000/)

Ao acessar a rota principal, todas as rotas da aplicação serão exibidas.
Observação: para acessar quaisquer rotas nesta aplicação o servidor deve estar de pé!

### Como utilizar as rotas:

- #### Rota: listar

[http://localhost:3000/pets/listar](http://localhost:3000/pets/listar)

Basta apenas acessar a rota para listar todos os pets existentes no banco de dados (um array de objetos).

- #### Rota: adicionar

[http://localhost:3000/pets/adicionar](http://localhost:3000/pets/adicionar)

Ao acessar esta rota, é necessário passar 7 (sete) parâmetros diretamente como URI. São eles:

- nome
- tipo
- raca
- idade
- genero
- vacinado
- servicos

Oberservação: o último parâmetro a ser passado são os serviços que serão dispostos dentro de um array no banco de dados. Assim, caso houver mais de um serviço, estes deverão ser separados por vírgula, assim como demonstrado no exemplo.

Exemplo:

[http://localhost:3000/pets/adicionar/handu/cao/canino/15/M/nao/banho,tosa](http://localhost:3000/pets/adicionar/handu/cao/canino/15/M/nao/banho,tosa)

- #### Rota: buscar

[http://localhost:3000/pets/buscar](http://localhost:3000/pets/buscar)

Busca um pet em específco passando como parâmetro o nome do pet.

Exemplo:

[http://localhost:3000/pets/buscar/ada](http://localhost:3000/pets/buscar/ada)

- #### Rota: vacinados 

[http://localhost:3000/pets/vacinados](http://localhost:3000/pets/vacinados)

Basta apenas acessar a rota e todos os pets vacinados e não vacinados serão exibidos.

- #### Rota: vacinar

[http://localhost:3000/pets/vacinar](http://localhost:3000/pets/vacinar)

Efetua a vacinação de um pet passado por nome como parâmetro na rota.

Exemplo:

[http://localhost:3000/pets/vacinar/costelinha](http://localhost:3000/pets/vacinar/costelinha)

- #### Rota: campanha

[http://localhost:3000/pets/campanha](http://localhost:3000/pets/campanha)

Vacina todos os pets no banco de dados.

- #### Rota: banho

[http://localhost:3000/pets/banho](http://localhost:3000/pets/banho)

Efetua o serviço de banho no pet especificado como parâmetro na rota.

Exemplo:

[http://localhost:3000/pets/banho/batman](http://localhost:3000/pets/banho/batman)

- #### Rota: tosar

[http://localhost:3000/pets/tosar](http://localhost:3000/pets/tosar)

Efetua o serviço de tosa no pet especificado como parâmetro na rota.

Exemplo:

[http://localhost:3000/pets/tosar/batman](http://localhost:3000/pets/tosar/batman)

- #### Rota: aparar

[http://localhost:3000/pets/aparar](http://localhost:3000/pets/aparar)

Efetua o serviço de aparar as unhas no pet especificado como parâmetro na rota.

Exemplo:

[http://localhost:3000/pets/aparar/batman](http://localhost:3000/pets/aparar/batman)

- #### Rota: atender

[http://localhost:3000/pets/atender](http://localhost:3000/pets/atender)

Faz o atendimento para um serviço em específico e efetua o pagamento do mesmo. O nome do pet e o nome do serviço deve ser passado como parâmetro na URI.

Exemplo:

[http://localhost:3000/pets/atender/ada/banho](http://localhost:3000/pets/atender/ada/banho)