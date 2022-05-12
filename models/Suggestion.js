const { Schema, model } = require("mongoose");

const suggestionSchema = new Schema(
    {
    user: [ {type: Schema.Types.ObjectId, ref: 'User'}],
    station : { type: Schema.Types.ObjectId, ref : 'Station'},
    stands : [{ 
        type: {type: String},
        amount: Number,
        price : Number,
        }],
    size : Number
    }
);

const Suggestion = model("Suggestion", suggestionSchema);
