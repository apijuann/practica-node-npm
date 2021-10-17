// Node, NPM y Express
// Ejercicio #3
/* Crear un servidor utilizando Node, NPM y express que permita mostrar un hola, mundo cuando ingresamos en el navegador la URL localhos:4500/hola_mundo
*/

const express = require('express')
const app = express()
 
app.get('/hola_mundo', function (req, res) {
  res.send('Hola, mundo!')
})
 
app.listen(4500)

// npm run prac
// http://localhost:4500/hola_mundo