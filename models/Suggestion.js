const { Schema, model } = require("mongoose");

const suggestionSchema = new Schema(
    {
    name: String,
    station : { type: Schema.Types.ObjectId, ref : 'Station'},
    location: {latitude: Number, longitude: Number},
    stands : { 
        type: {type: String},
        amount: Number,
        sum: Number,
        }
    }
);

const Suggestion = model("Suggestion", suggestionSchema);

module.exports = Suggestion;
