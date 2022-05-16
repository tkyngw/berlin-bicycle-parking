const { Schema, model } = require("mongoose");

const spotSchema = new Schema(
    {
    size : Number,
    location : String,
    district : String,
    distance : Number,
    holder : String,
    }
);

const Spot = model("Spot", spotSchema);

module.exports = Spot;
