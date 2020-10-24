/* chamando o arquivo exportado no db.js .. */

/*o database criado aqui, o grandao recebe o valor do db-zinho da db.js */

const Database = require("./db.js");

const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-8.0667694",
    lng: "-34.8608646",
    name: "Lar dos meninos2",
    about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e ou vulnerabilidade social.",
    whatsapp: "8193212812",
    images: [
      "https://images.unsplash.com/photo-1599988288485-534984f5cd21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1602667640990-1550db46d614?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    ].toString(), /* salva o array como string */
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "1"
  });
  /*
  
  /* async é como se fosse uma cadeia de instruções, o await vai aguardar executar o db.run e colocar automaticamente um .then no final do codigo*/
  
  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  /* consultar somente um orfanato pelo ID */
 // const orphanage = await db.all('SELECT * FROM orphanages where id = "3"');
  //console.log(orphanage);
});
