-- Criação da tabela Cargo
CREATE TABLE Cargo (
  id_cargo serial PRIMARY KEY,
  nome varchar(250) NOT NULL,
  nucleo varchar(250) NOT NULL,
  created_at timestamp NOT NULL
);


-- Criação da tabela User com ID auto_incrementado e chave primária
CREATE TABLE Users (
  id_users varchar(50) PRIMARY KEY,
  username varchar(50) UNIQUE NOT NULL,
  senha varchar(250) NOT NULL,
  gender char(5) NOT NULL,
  email varchar(250) UNIQUE NOT NULL,
  id_cargo int NOT NULL REFERENCES Cargo(id_cargo),
  is_admin bool,
  imagem timestamp,
  created_at timestamp NOT NULL
);

-- Criação da tabela Post
CREATE TABLE Post (
  id_post serial PRIMARY KEY,
  id_users varchar(50) REFERENCES Users(id_users),
  post_content varchar(250) NOT NULL,
  updated_at timestamp NOT NULL,
  created_at timestamp NOT NULL
);

CREATE TABLE Comments (
  id_comments serial PRIMARY KEY,
  id_post integer REFERENCES Post(id_post),
  id_users varchar(50) REFERENCES Users(id_users),
  comment_content varchar(100) NOT NULL
);