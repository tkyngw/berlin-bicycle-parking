
const router = require("express").Router();

const Spot = require('../models/Spot');

router.get('/', (req, res, next) => {
  Spot.find()
		.then((response) => res.json(response))
		.catch(err => res.json(err))
});

router.get('/:id', (req, res, next) => {
  Spot.findById(req.params.id)
  .populate('suggestions')
  .then(station => res.status(200).json(station))
  .catch(err => res.json(err))
})

router.post('/', (req, res, next) => {
  const {name, lines} = req.body

  Spot.create({
    name: name,
    lines: lines
  })
  .then(response => res.json(response))
  .catch(err => res.json(err))
})

module.exports = router;

