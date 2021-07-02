var express = require('express');
var router = express.Router();
const api = require('../api');

/* GET home page. */
router.get('/', async (req, res)=> {
  const allBooks = await api.getBooks();
  console.log(allBooks);
   res.render('index', { title: 'Express' });
  // res.send(allBooks);
});

module.exports = router;

router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});


router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});




module.exports = router;