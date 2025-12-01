# Banco de Dados - Tabela "estados"

Comando de criação da tabela **estados** no banco de dados PostgreSQL :

```sql
CREATE TABLE estados (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    uf VARCHAR(2) UNIQUE NOT NULL
);
```

População básica para testar as requisições:
```sql 
INSERT INTO estados (nome, uf) VALUES
('São Paulo', 'SP'),
('Rio de Janeiro', 'RJ'),
('Minas Gerais', 'MG'),
('Bahia', 'BA'),
('Paraná', 'PR');
```


Comando de criação da tabela **cidades** no banco de dados PostgreSQL:
```sql
CREATE TABLE cidades (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    estado_uf VARCHAR(2) NOT NULL,
    
    FOREIGN KEY (estado_uf) REFERENCES estados (uf)
)
```