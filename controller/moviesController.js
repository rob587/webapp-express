const connection = require ('../data/db')


const index = (req, res) =>{
   const sql = 'SELECT * FROM MOVIES'

   connection.query(sql, (err,results)=>{
    if(err) return res.status(500).json({error: 'Fallita ricerca della lista'})

    res.send(results)
   })
}


const show = (req, res) =>{
    console.log('show')
}

module.exports={
    index,
    show
}
