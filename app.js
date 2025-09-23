require('dotenv').config()
const express = require ('express')
const connection = require ('./data/db')
const cors = require ('cors')
const path = require('path')



const app = express()

const port = 3000

const movieRouter = require('./router/moviesRouting')

app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('CIAO MONDO')
})

app.use('/movies', movieRouter)

app.listen (port, ()=>{
    console.log('ciao')
})