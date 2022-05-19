const { Schema, model } = require("mongoose");

const suggestionSchema = new Schema(
    {
    user: [ {type: Schema.Types.ObjectId, ref: 'User'}],
    stationId : { type: Schema.Types.ObjectId, ref : 'Station'},
    location : {
      latitude : Number,
      longitude : Number
    },
    stands : [{ 
        type: {type: String},
        amount: Number,
        sum: Number,
        }]
    }
);

const Suggestion = model("Suggestion", suggestionSchema);

module.exports = Suggestion;
