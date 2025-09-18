const connection = require ('../data/db')


const index = (req, res) =>{
    console.log('index')
}


const show = (req, res) =>{
    console.log('show')
}

module.exports={
    index,
    show
}
