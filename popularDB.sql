-- ============================================
-- CRIAÇÃO DAS TABELAS
-- ============================================

CREATE TABLE IF NOT EXISTS estados (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    uf VARCHAR(2) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS cidades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    estado_uf VARCHAR(2) NOT NULL,
    CONSTRAINT fk_estado
        FOREIGN KEY (estado_uf)
        REFERENCES estado (uf)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- ============================================
-- ADICIONANDO OS 27 ESTADOS DO BRASIL
-- ============================================

INSERT INTO estados (nome, uf) VALUES
('Acre', 'AC'),
('Alagoas', 'AL'),
('Amapá', 'AP'),
('Amazonas', 'AM'),
('Bahia', 'BA'),
('Ceará', 'CE'),
('Distrito Federal', 'DF'),
('Espírito Santo', 'ES'),
('Goiás', 'GO'),
('Maranhão', 'MA'),
('Mato Grosso', 'MT'),
('Mato Grosso do Sul', 'MS'),
('Minas Gerais', 'MG'),
('Pará', 'PA'),
('Paraíba', 'PB'),
('Paraná', 'PR'),
('Pernambuco', 'PE'),
('Piauí', 'PI'),
('Rio de Janeiro', 'RJ'),
('Rio Grande do Norte', 'RN'),
('Rio Grande do Sul', 'RS'),
('Rondônia', 'RO'),
('Roraima', 'RR'),
('Santa Catarina', 'SC'),
('São Paulo', 'SP'),
('Sergipe', 'SE'),
('Tocantins', 'TO');

-- ============================================
-- ADICIONANDO ALGUMAS CIDADES
-- ============================================

INSERT INTO cidades (nome, estado_uf) VALUES
('São Paulo', 'SP'),
('Campinas', 'SP'),
('Rio de Janeiro', 'RJ'),
('Niterói', 'RJ'),
('Curitiba', 'PR');
