const express = require ('express')
const connection = require ('./data/db')

const app = express()

const port = process.env.PORT

const movieRouter = require('./router/moviesRouting')

app.get('/', (req, res)=>{
    res.send('CIAO MONDO')
})

app.use('/movies', movieRouter)

app.listen (port, ()=>{
    console.log('ciao')
})