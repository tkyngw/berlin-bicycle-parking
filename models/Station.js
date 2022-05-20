const { Schema, model } = require("mongoose");

const stationSchema = new Schema(
    {
    name : String,
    line : [],
    district : String,
    capacity: Number,
    suggestion : [{ type: Schema.Types.ObjectId, ref : 'Suggestion'}]
    }
);

const Station = model("Station", stationSchema);

module.exports = Station;
