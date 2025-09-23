const connection = require ('../data/db')


const index = (req, res) =>{
   const sql = 'SELECT * FROM MOVIES'

   connection.query(sql, (err,results)=>{
    if(err) return res.status(500).json({error: 'Fallita ricerca della lista'})

    res.send(results)
   })
}


const show = (req, res) =>{
    const id = req.params.id
    
    const sql = 'SELECT * FROM movies WHERE ID = ?'
    const reviews = 'SELECT * FROM reviews WHERE movie_id = ?'
    connection.query(sql, [id], (err,results) =>{
        if(err) return res.status(500).json({error: 'Query del database fallita'})
        if(results.length === 0) return res.status(404).json ({error: 'Film non trovato'})
            
            connection.query(reviews, [id], (err, reviewResults)=>{
                if (err) return res.status(500).json({ error: 'Query delle reviews fallita' });
                
            res.json({
                film:results[0],
                reviews: reviewResults
            })
        })
    })
}

const store = (req, res, next) =>{
    const {title, author, abstract} = req.body
    console.log(req.file)

    const fileName = `${req.file.filename}`
    

    const query = 'INSERT INTO movies (title, author, image abstract) VALUES (?, ?, ?, ?)'

    connection.query(query, [title, author, fileName, abstract], (err, results)=>{
        if (err) {
            return res.status(500).json({error: 'Errore durante inserimento' +err})           
        }
        res.status(201).json({
            result: true,
            message: 'film creato con successo'
        })
    })
}

module.exports={
    index,
    show
}
