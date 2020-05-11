const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
//route handler para la ruta raiz
/*app.get('/', (req,res) =>{
  //res.send(`<html><head><title>Page Title</title></head><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>`);
  res.render('index');
});*/


app.get('/person/:id', (req,res) =>{
  //console.log(`El id enviado es ${req.params.idProducto}`)
  res.render('index', { ID: req.params.id }); 
});

app.listen(port, () =>{
  console.log(`Escuchando en el puerto ${port}`);
})
