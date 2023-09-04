CREATE TABLE user (
  id          INTEGER      AUTO_INCREMENT,
  login_id    VARCHAR(50)  NOT NULL UNIQUE,
  password    VARCHAR(100) NOT NULL,
  salt        VARCHAR(20)  NOT NULL,
  name        VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE image (
  id          INT          NOT NULL AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL UNIQUE,
  size        INT          NOT NULL,
  comment     VARCHAR(100) NOT NULL,
  mime_type   VARCHAR(20)  NOT NULL,
  PRIMARY KEY (id)
);
