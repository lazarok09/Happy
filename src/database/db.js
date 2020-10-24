const Database = require('sqlite-async');



function execute(db) {
   return db.exec(`


   
            CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT

        );  
        `) 
       }

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) /* o module exports vai jogar pra fora
o resultado da aplicaçaõ db.exec, ou seja, vai enviar os atributos feitos na função ir pra dentro do db-zinho  */