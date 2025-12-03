# Code Test – Grupo PLL

API simples desenvolvida em **Node.js**, utilizando **Express** e **pg (PostgreSQL)**, criada para demonstrar meus conhecimentos em:

- Lógica de programação  
- CRUD completo  
- Modelagem relacional (Estados e Cidades)  
- Padrões de API Rest
- Validações e tratamento de erros  
- Boas práticas de organização em Node.js  
- Versionamento com Git  
- Paginação  
- Pesquisa (query params)  
- Autenticação com token fixo  

---

## 🏗️ Arquitetura do Projeto (MVC Adaptado)

A estrutura segue uma arquitetura **MVC Simplificada**, onde eu adaptei para ficar sem a camada de visualição:

```
src/
 ├ config/        -> Configurações gerais (ex: conexão com o banco de dados)
 ├ controllers/   -> Lógica dos endpoints, tratamento das requisições HTTP
 ├ exceptions/    -> Exceptions personalizadas (ex: HttpException)
 ├ middleware/    -> Middlewares (ex: autenticação com token fixo)
 ├ model/         -> Comunicação direta com o banco (queries SQL)
 ├ routes/        -> Arquivos de definição das rotas de estados e cidades
 └ app.js         -> Arquivo principal que inicia a API
```

---

## 🚀 Como instalar e rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/GabbFlor/Code-Test-Grupo-PLL.git
cd Code-Test-Grupo-PLL
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Criar banco de dados e usuário no PostgreSQL

Você precisa criar:

- Um **usuário**
- Um **banco de dados**
- Dar permissões ao usuário

Guia simples:  
https://www.cherryservers.com/blog/postgres-superuser

---

## 📄 Criar arquivo `.env`

Crie o arquivo `.env` na raiz do projeto com:

```env
# credenciais do DB
DB_NAME = "seu_banco"
DB_HOST = "localhost"
DB_USER = "seu_usuario"
DB_PASSWORD = "sua_senha"
DB_PORT = 5432

# API Key
API_KEY = "coloque_seu_token_aqui"
```

O token será usado em todas as requisições via:

```
Authorization: Bearer SEU_TOKEN
```

---

## 🗃️ Popular o Banco de Dados

Execute o script incluído na raiz do projeto:

```
popularDB.sql
```

Para rodar:

```bash
psql -U SEU_USUARIO -d SEU_BANCO -f popularDB.sql
```

---

## ▶️ Rodar o servidor

```bash
node src/app.js
```

A API estará disponível em:

```
http://localhost:3001
```

---

# 📚 Endpoints da API

## 🔐 Autenticação obrigatória

Todos os endpoints exigem:

```
Authorization: Bearer SEU_TOKEN_DO_ENV
```

---

# 🌎 Estados

### **GET /estados**
Lista estados com busca e paginação.

Query params:
- `q` — busca por nome ou UF  
- `page` — número da página  
- `limit` — quantidade por página  

Exemplo:

```
GET /estados?q=pa&page=1&limit=10
```

---

### **GET /estados/:id**
Retorna um único estado.

```
GET /estados/3
```

---

# 🏙️ Cidades

### **GET /cidades**
Lista cidades com busca e paginação.

Query params:
- `q`
- `page`
- `limit`

Exemplo:

```
GET /cidades?q=rio&page=1&limit=10
```

---

### **GET /cidades/:id**

```
GET /cidades/5
```

---

### **POST /cidades**

Body:

```json
{
  "nome": "Campinas",
  "estado_uf": "SP"
}
```

---

### **PUT /cidades/:id**

Body:

```json
{
  "nome": "Nova Campinas",
  "estado_uf": "SP"
}
```

--- 

### **DELETE /cidades/:id**

```
DELETE /cidades/10
```