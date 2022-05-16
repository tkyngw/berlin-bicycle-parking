
const router = require("express").Router();

const Station = require('../models/Station');

router.get('/', (req, res, next) => {
  Station.find()
		.then((response) => res.json(response))
		.catch(err => res.json(err))
});

router.get('/:id', (req, res, next) => {
  Station.findById(req.params.id)
  .populate('suggestions')
  .then(station => res.status(200).json(station))
  .catch(err => res.json(err))
})

router.post('/', (req, res, next) => {
  const {name, lines} = req.body

  Station.create({
    name: name,
    lines: lines
  })
  .then(response => res.json(response))
  .catch(err => res.json(err))
})
module.exports = router;

