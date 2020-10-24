const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');


module.exports = {

    index(req, res) {
        return res.render('index')
    },
    async orphanage(req, res) {
       try {
        const id = req.query.id

        const db = await Database;
        const results = await db.all(`SELECT * FROM orphanages where id = "${id}"`);
        const orphanage = results[0];

        orphanage.images = orphanage.images.split(",") 
        orphanage.firstImage = orphanage.images[0];

        /* momento 1 hora e 22 da aula, concluido desafio de if ternário */
        orphanage.open_on_weekends == "0" ? orphanage.open_on_weekends = false : orphanage.open_on_weekends == true
        


        return res.render('orphanage', { orphanage })

       }    catch {
           console.log(error);
           return res.send('Erro no BD')
       }

    },

    async orphanages(req, res) {
         const db = await Database; 
        try { const orphanages = await db.all("SELECT * FROM orphanages")
        return res.render('orphanages', { orphanages} )
                } catch (error) {
                    console.log(error)
                    return res.send("Erro no BANCO DE DADOS")
                }

            },
        

    createOrphanage(req, res) {
        return res.render('create-orphanage');
    },

    async saveOrphanage(req, res) {
        const fields= req.body

        //validar se todos os campos estao preenchidos
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos')
        }

        try {
             //salvar um orfanato
        const db = await Database
        await saveOrphanage (db, { 
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatssap: fields.whatssap,
            images: fields.images.toString(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            open_on_weekends: fields.open_on_weekends,
        })
        
         
         //redirecionamento 
         return res.redirect('/orphanages');

         }
          catch {
            console.log(error);
            return res.send('Erro no Banco de Dados')
        }

       
    },
    
};