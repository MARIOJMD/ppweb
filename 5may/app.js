const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static(__dirname + '/public'));

//route handler para la ruta raiz
app.get('/', (req,res) =>{
  res.send(`<html><head><title>Page Title</title></head><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>`);
});


app.get('/person/:idProducto', (req,res) =>{
  //console.log(`El id enviado es ${req.params.idProducto}`)
  res.send(`<html><head><title>Page Title</title></head><link href=/assets/style.css type=text/css rel=stylesheet> <body><h1>El id enviado es: ${req.params.idProducto}</h1><p>My first paragraph.</p></body></html>`);
});

app.listen(port, () =>{
  console.log(`Escuchando en el puerto ${port}`);
})
