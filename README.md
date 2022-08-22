<h1 align="center">
    <a href="https://teste-tecnico-giro-tech.vercel.app/">Desafio Técnico Giro.Tech</a>
</h1>

<h3 align="center">Trata-se de uma aplicação simples que tem como objetivo calcular um investimento em que o usuário fornece o valor investido e o período de tempo que se deseja aplicar. A taxa de juros utilizada é a Selic, que é resgatada via <a href="https://brasilapi.com.br/api/taxas/v1/">API</a></h3>

<br/>

### ✅ Features da aplicação

- [x] Login (basta digitar algum login e senha, é tudo local, nenhum dado é enviado para nenhuma API);
- [x] Visualizar a taxa Selic antes de fazer a simulação
- [x] Inserir o valor e período desejados;
- [x] Visualizar todos os valores inseridos, mais a taxa, além do valor retornado após o período de investimento;
- [x] Logout;
- [x] Proteção de rotas (usuário deslogado não consegue acessar a aplicação e usuário logadonão consegue acessar a página de login);

<br/>

### ✅ Link para a demo da aplicação

- [x] <a href="https://teste-tecnico-giro-tech.vercel.app/">Live Demo</a>

<br/>

#### 🏠 Login

![Login](https://user-images.githubusercontent.com/91695244/185932422-8d8fb00c-8340-4c55-ab80-1104f6c0d178.png)

<br/>

#### 🏠 Homepage

![Homepage](https://user-images.githubusercontent.com/91695244/185932625-478577f1-e481-467c-83cd-9ca2f5e851a9.png)

<br/>

#### ✅ Resultado

![Resultado](https://user-images.githubusercontent.com/91695244/185932738-609ce723-0b88-4012-b28e-8a84ddb373e3.png)

<br/>

### ✅ Como rodar a aplicação localmente

Antes de tudo, você precisa das seguintes tecnologias:

- [x] [Git](https://git-scm.com)
- [x] [NPM](https://www.npmjs.com/)
- [x] Algum editor de códigos, no meu caso, utilizo o [VSCode](https://code.visualstudio.com/)

<br/>

### 🎲 Preparando o ambiente

```bash
# Faça o clone deste repositório

$ git clone git@github.com:arturcomoli/teste-tecnico-giro-tech.git


# Entre na raiz do repositório clonado

$ cd teste-tecnico-giro-tech

# Instale as dependências da aplicação

$ npm install

# Rode a aplicação por meio do script abaixo

$ npm start

# Prontinho, será aberta uma página no seu navegador com a aplicação rodando localmente
```

### 🎲 Executando os testes

Após clonar o repositório e entrar em sua raíz (conforme descrito acima), siga os passos abaixo:

```bash

$ npm test -- --watchAll

```

### 🛠 Principais tecnologias utilizadas

- [CRA](https://create-react-app.dev/) - Criação do React App
- [Chakra UI](https://chakra-ui.com/) - Aplicação de estilos na aplicação
- [Axios](https://axios-http.com/ptbr/docs/intro) - Gerenciamento de requisições HTTP
- [React Hot Toast](https://react-hot-toast.com/) - Feedback de erros ao usuário
- [React Router Dom](https://reactrouter.com/) - Roteamento das páginas da aplicação
- Outras bibliotecas que auxiliaram no desenvolvimento podem ser encontradas na seção: `"dependencies"` e `"devDependencies"` no arquivo `package.json`, no diretório relacionado ao frontend

<br/>

### ✅ Desenvolvedor responsável - Artur Comoli

<img src="https://avatars.githubusercontent.com/u/91695244?v=4" alt="Artur Comoli" style="border-radius: 50%" width="120px"/>

<br/>

Entre em contato!

<div>
    <a href = "mailto:artur.comoli@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"/>
    <a href="https://www.linkedin.com/in/artur-comoli" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>     
</div>
