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
    connection.query(sql, [id], (err,results) =>{
        if(err) return res.status(500).json({error: 'Query del database fallita'})
        if(results.length === 0) return res.status(404).json ({error: 'Film non trovato'})
        res.json(results[0])
    })
}

module.exports={
    index,
    show
}
