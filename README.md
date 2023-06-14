# Documentação - Serviço de Gerenciamento de Imobiliária

## Requisitos

Antes de iniciar o projeto, certifique-se de atender aos seguintes requisitos:

-  Node.js (versão 12 ou superior) instalado na máquina.
-  Gerenciador de pacotes Yarn instalado globalmente. Caso não tenha o Yarn, você pode instalá-lo utilizando o seguinte comando:
   ```
   npm install --global yarn
   ```

## Instalação

Siga as etapas abaixo para instalar as dependências do projeto:

1. Faça o clone do repositório do projeto.
2. Navegue até o diretório raiz do projeto no seu terminal.
3. Execute o seguinte comando para instalar as dependências necessárias:
   ```
   yarn install
   ```

## Configuração do ambiente

Antes de executar o projeto, é necessário configurar as variáveis de ambiente no arquivo `.env`. Copie o conteúdo do arquivo `.env.example` para um novo arquivo chamado `.env` e preencha as variáveis de acordo com suas configurações:

### Configurações do servidor

-  `PORT`: A porta na qual o servidor será executado.
-  `SECRET_KEY`: Uma chave secreta para criptografia de tokens e outros fins de segurança.

### Configurações do banco de dados PostgreSQL

-  `POSTGRES_USER`: O usuário do banco de dados PostgreSQL.
-  `POSTGRES_PASSWORD`: A senha do banco de dados PostgreSQL.
-  `POSTGRES_DB`: O nome do banco de dados PostgreSQL.
-  `POSTGRES_HOST`: O host do banco de dados PostgreSQL.

**Observação**: Para execução com Docker, deixe `POSTGRES_HOST=postgres`. Para execução local, defina `POSTGRES_HOST=localhost`.

## Executando o projeto

### Utilizando Docker

Este projeto já possui o Docker configurado e pronto para uso. Siga as etapas abaixo para executar o projeto com Docker:

1. Certifique-se de ter o Docker instalado e em execução em sua máquina.
2. No terminal, estando no diretório raiz do projeto, execute o seguinte comando para construir e iniciar os containers Docker:
   ```shell
   docker-compose up --build
   ```
   **Observação**: O comando pode variar dependendo da versão do Docker Compose instalada em sua máquina.
3. Caso der erro após ter utilizado o comando acima, aperte CTRL + C, e tenta novamente com esse comando:

```
 docker-compose up
```

Observação: A porta utilizada para rodar o Docker é a 5431. Caso haja algum problema com essa porta, você pode alterá-la no arquivo `docker-compose.yml`.

### Executando localmente

Se você preferir executar o projeto localmente, siga as etapas abaixo:

1. Certifique-se de ter as configurações corretas no arquivo `.env`.
2. Certifique-se de estar no diretório raiz do projeto no seu terminal, Execute o seguinte comando para executar as migrations:
   ```
   yarn typeorm migration:run -d src/data-source.ts
   ```
3. No terminal, estando no diretório raiz do projeto, execute o seguinte comando para iniciar o servidor local:
   ```shell
   yarn dev
   ```

## Testes

Este projeto inclui testes automatizados para validar as regras de negócio. Os testes estão localizados na pasta `src/__tests__`. Os testes de integração estão localizados na subpasta `integration` e os dados de teste estão na subpasta `mocks`.

**Observação**: Não altere os arquivos de teste existentes ou as configurações no arquivo `jest.config.json`, pois isso pode comprometer a integridade dos testes.

### Executando os testes

Para executar os testes, siga as etapas abaixo:

1. Certifique-se de estar no diretório raiz do projeto no seu terminal.
2. Execute o seguinte comando para rodar todos os testes:

   ```shell
   yarn test
   ```

   Para obter um log mais detalhado durante a execução dos testes, você pode usar o seguinte comando:

   ```shell
   yarn test --all
   ```

   Para executar testes de uma pasta específica, utilize o seguinte comando (substitua `<subpasta>` pelo nome da subpasta desejada):

   ```shell
   yarn test ./src/__tests__/integration/<subpasta>
   ```

   Para executar testes de um arquivo específico, utilize o seguinte comando (substitua `<subpasta>` pelo nome da subpasta e `<arquivo>` pelo nome do arquivo desejado):

   ```shell
   yarn test ./src/__tests__/integration/<subpasta>/<arquivo>
   ```

   Para executar um teste específico, utilize o seguinte comando (substitua `<describe ou test específico>` pelo nome do teste desejado, envolto em aspas):

   ```shell
   yarn test -t "<describe ou test específico>"
   ```

**Observação**: Após a execução dos testes, um log será exibido no terminal, contendo informações sobre a execução dos testes.

### Integração Contínua com GitHub Actions

O projeto está configurado para executar o CI usando o GitHub Actions. O fluxo de trabalho (workflow) está definido no arquivo `.github/workflows/integration_tests.yml`. Ele é acionado automaticamente em duas situações:

-  Quando ocorre um push para a branch `master`.
-  Quando é aberto um pull request para a branch `master`.

O fluxo de trabalho de CI realiza as seguintes etapas:

1. Verifica a sintaxe e a formatação do código usando ferramentas como ESLint e Prettier.
2. Instala as dependências do projeto usando o Yarn.
3. Executa os testes automatizados do projeto usando o comando `yarn test`.

Para acessar os resultados do CI, vá até a página do projeto no GitHub, clique na aba "Actions" e selecione o workflow "Execução dos testes de integração". Lá você encontrará os registros das execuções anteriores e poderá verificar se os testes estão passando ou se ocorreram erros.

## Observações

Aqui estão algumas observações importantes a serem consideradas ao executar o projeto:

-  Ao executar o projeto com Docker, verifique se a porta 5432 não está sendo utilizada por outros serviços em sua máquina. Caso haja um conflito de portas, você pode alterar a porta no arquivo `docker-compose.yml` antes de executar o comando `docker-compose up --build`.

-  Dentro do contêiner, o PostgreSQL está executando na porta 5432. No host local (onde o Docker está sendo executado), você pode acessar o PostgreSQL usando a porta 5431.

-  Se você optar por executar o projeto localmente, certifique-se de que o host do banco de dados PostgreSQL seja definido como `localhost`. Para isso, verifique e atualize a variável `DB_HOST` no arquivo `.env` para `localhost`.

-  No caso de execução do projeto utilizando Docker, o host do banco de dados PostgreSQL deve ser definido como `postgres`. Portanto, verifique e atualize a variável `DB_HOST` no arquivo `.env` para `postgres` se você estiver executando a aplicação no ambiente Docker.

Essas observações são importantes para garantir o correto funcionamento do projeto, evitando possíveis conflitos de porta ou problemas de conexão com o banco de dados.

Certifique-se de seguir as orientações adequadas com base na forma de execução escolhida: com Docker ou localmente.


## Importando no Insomnia

Caso deseje utilizar o Insomnia para testar as requisições da API, você pode importar o arquivo `workspace-e5.json` fornecido junto com a documentação. Siga as etapas abaixo para importar o workspace no Insomnia:

1. Abra o Insomnia.

2. Clique no botão "+ Create" na barra lateral esquerda.

3. Selecione "Import/Export".

4. Na janela de importação, selecione a opção "Import Data" e escolha o arquivo `workspace.json`.

5. Clique em "Import" e o workspace será importado com todas as requisições pré-configuradas.

Após a importação, você poderá ver as requisições no painel esquerdo do Insomnia após ter clicado em DEBUG, facilitando o teste e uso da API.

## Endpoints do serviço

A seguir estão os endpoints disponíveis no serviço de gerenciamento de imobiliária:

-  **POST /users**: Criação de um usuário.
-  **GET /users**: Lista todos os usuários.
-  **PATCH /users**: Atualiza um usuário.
-  **DELETE /users/:id**: Realiza um soft delete no usuário com o ID especificado.
-  **POST /login**: Gera um token de autenticação.
-  **POST /categories**: Criação de uma categoria.
-  **GET /categories/:id/properties**: Lista todos os imóveis que pertencem a uma categoria.
-  **POST /properties**: Criação de um imóvel.
-  **GET /properties**: Lista todos os imóveis.
-  **POST /schedules**: Agenda uma visita a um imóvel.
-  **GET /schedules/properties/:id**: Lista todos os agendamentos de um imóvel.

Certifique-se de utilizar os métodos HTTP corretos e fornecer os dados necessários para cada endpoint.

## Considerações Finais

Essa é a documentação atualizada para o serviço de gerenciamento de imobiliária utilizando TypeORM e relacionamentos. Certifique-se de seguir as instruções e orientações fornecidas para configurar e executar o projeto corretamente.
