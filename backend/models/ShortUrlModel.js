const mongoose = require('mongoose')

const shortURLSchema = mongoose.Schema(
    {
        URL: {
            type: String,
            required: [true, 'Please add the url value.'],
            unique: true,
        },
        shortURL: {
            type: String,
            required: [true, 'Please add the shortened url value.'],
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('shortURL', shortURLSchema);