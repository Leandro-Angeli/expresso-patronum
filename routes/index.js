var express = require('express');
var router = express.Router();
const api = require('../api');

/* GET home page. */
router.get('/', async (req, res)=> {
  const books = await api.getBooks();
  console.log(books);
   res.render('index', { title: 'Libreria',books});
  // res.send(allBooks);
});

module.exports = router;

router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

router.get('/agregar', async (req, res) => {
  const authors = await api.getAutor();

  res.render('pages/agregar',{title:'Agregar', authors});
});

router.post('/agregar_proceso', (req, res) => {
  res.send(req.body);
});

router.get('/autores',async (req, res) => {
  const allAutor = await api.getAutor();
  console.log(allAutor);
  res.send(allAutor);
});

router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});

router.get('/libro/:id',async (req,res) =>{
  const book = await api.getBookById(req.params.id);
  res.render('./pages/libros',{title:'Libro',book});
})

router.get('/buscar',async (req,res) =>{
   const books = await api.findBookByTitle(req.query.q);
  //  res.send(books);
   res.render('index',{ title: 'Resultado de la Busqueda',books});

})
// router.get('/libros',(req,res)=>{
// res.render('pages/libros');

// })



module.exports = router;