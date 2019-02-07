const index = require('./index')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const router = express.Router();
router.get('/', (res, req) => res.json({message: 'Its work!'}))

router.get('/aplicardesconto/:valor/:desconto', (req, res) => {
    const valor = parseInt(req.params.valor)
    const desconto = parseInt(req.params.desconto)
    res.json({
        valorDescontado: index.aplicarDesconto(valor, desconto)
    })
} )

app.use('/', router)

if(require.main === module){
    app.listen(port)
    console.info('API Server working!');    
}

module.exports = app