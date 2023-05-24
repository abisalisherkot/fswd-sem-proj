const mongoose = require('mongoose');

const groundSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            require: true
        },
        image: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Ground = mongoose.model('ground', groundSchema);

module.exports = Ground;