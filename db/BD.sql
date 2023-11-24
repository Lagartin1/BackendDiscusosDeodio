CREATE DATABASE IF NOT appdb;

use appdb;


-- Tabla para la red social
CREATE TABLE red_social (
    id_rs INT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Tabla para las publicaciones
CREATE TABLE publicacion (
    URL VARCHAR(255) PRIMARY KEY,
    fecha DATE NOT NULL,
    contenido_pub TEXT NOT NULL,
    id_rs INT,
    FOREIGN KEY (id_rs) REFERENCES red_social(id_rs)
);

-- Tabla para los comentarios
CREATE TABLE comentario (
    id_c INT PRIMARY KEY,
    odio BOOLEAN NOT NULL,
    contenido_c TEXT NOT NULL,
    URL VARCHAR(255),
    FOREIGN KEY (URL) REFERENCES publicacion(URL)
);

-- Tabla para las palabras clave
CREATE TABLE palabra (
    id_pal INT PRIMARY KEY,
    palabra_clave VARCHAR(255) NOT NULL,
    cantidad_ocurr INT NOT NULL,
    id_c INT,
    FOREIGN KEY (id_c) REFERENCES comentario(id_c)
);
