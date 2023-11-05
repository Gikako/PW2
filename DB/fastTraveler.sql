create database fastTraveler;

use fastTraveler;

create table Usuaruo(
ID_Usser int AUTO_INCREMENT,
Name varchar(30),
lastName varchar(30),
email varchar(20),
edad smallint,
PRIMARY KEY (ID_Usser)
);

create table Provedor(
ID_Provedor int AUTO_INCREMENT,
Aerolinea varchar(30),
PRIMARY KEY (ID_Provedor)
);


create table Compras(
ID_Compra int AUTO_INCREMENT,
fechaCompra date,
ID_Apartado int,
PRIMARY KEY (ID_Compra),
FOREIGN KEY (ID_Apartado) REFERENCES ViajeApartado(ID_Apartado)
);

create table Viaje(
ID_Viaje int AUTO_INCREMENT,
Transporte varchar(20),
fechasSalida time,
fechaHora time,
costo decimal(5,2),
ID_Provedor int,
Id_Trayecto int,
PRIMARY KEY (ID_Viaje),
FOREIGN KEY (ID_Provedor) REFERENCES Provedor(ID_Provedor),
FOREIGN KEY (Id_Trayecto) REFERENCES Trayecto(Id_Trayecto)
);

create table Trayecto(
Id_Trayecto int AUTO_INCREMENT,
ID_Ciudad int,
Destino varchar(30),
Salida varchar(30),
PRIMARY KEY (Id_Trayecto),
FOREIGN KEY (ID_Ciudad) REFERENCES Ciudad(ID_Ciudad)
);

create table Ciudad(
ID_Ciudad int AUTO_INCREMENT,
Ciudad varchar(30),
Estado varchar(30),
PRIMARY KEY (ID_Ciudad)
);

create table ViajeApartado(
ID_Apartado int AUTO_INCREMENT,
ID_Provedor int,
ID_Usser int,
FOREIGN KEY (ID_Provedor) REFERENCES Provedor(ID_Provedor),
FOREIGN KEY (ID_Usser) REFERENCES Usuaruo(ID_Usser),
PRIMARY KEY (ID_Apartado)
);

