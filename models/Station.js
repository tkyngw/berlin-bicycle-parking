const { Schema, model } = require("mongoose");

const stationSchema = new Schema(
    {
    stationName : String,
    line : String,
    district : String,
    currentCapacity: Number,
    loadFactor : Number,
    suggestion : [{ type: Schema.Types.ObjectId, ref : 'Suggestion'}]
    }
);

const Station = model("Station", stationSchema);

module.exports = Station;
