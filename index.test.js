const test = require('tape')
const index = require('./index')

test('Aplicar Desconto', (test) => 
{
    test.assert(index.aplicarDesconto(10,5) == 5,
    "Descontou corretamente")
    test.end()
})