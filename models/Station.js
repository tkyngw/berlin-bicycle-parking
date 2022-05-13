const { Schema, model } = require("mongoose");

const stationSchema = new Schema(
    {
    name : String,
    line : [],
    district : String,
    currentCapacity: Number,
    loadFactor : Number,
    suggestions : [{ type: Schema.Types.ObjectId, ref : 'Suggestion'}]
    }
);

const Station = model("Station", stationSchema);

module.exports = Station;
