
const router = require("express").Router();

const res = require("express/lib/response");
const Suggestion = require('../models/Suggestion');

// get all the existing suggestions
router.get('/', (req, res, next) => {

    Suggestion.find()
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

// create a new suggestion
router.post('/', (req, res, next) => {
	const { user, station, stands, size } = req.body

	Suggestion.create({
		user: user,
		station, station,
		stands, stands,
		size: size
	})
		.then(response => res.json(response))
		.catch(err => res.json(err))
});

// return a specific suggestion
router.get('/:id' , (req, res, next) => {
    const { suggestionId } = req.params

    Suggestion.findById(suggestionId)
    .then(suggestion => res.json(suggestion))
    .catch(err => res.json(err))

})

//edit a specific suggestion
router.put('/:id', (req, res, next) => {
    const { suggestionId } = req.params

    Suggestion.findByIdAndUpdate(suggestionId, req.body, {new :true})
    .then(updatedSuggestion => res.json(updatedSuggestion))
    .catch(err => res.json(err))
})

// delete a specific suggestion
router.delete('/:id', (req, rex, next) => {
    const { suggestionId } = req.params

    Suggestion.findByIdAndRemove(suggestionId)
    .then(() => res.json({ message: `Suggestion with ${suggestionId} is removed successfully.` }))
    .catch(error => res.json(error));
})

module.exports = router;
