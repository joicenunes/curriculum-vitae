
const router = require('express').Router();
const CurriculoController = require('../controllers/curriculo-controller');

router.get('/', (req, res, next) => {
  res.render('index', {
    title: CurriculoController.getName(),
    version: '1.0.0',
    data: CurriculoController.getData()
  });
});

exports.router = router;
