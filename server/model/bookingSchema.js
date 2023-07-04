const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        personID: {
            type: String,
            required: true,
        },
        personName: {
            type: String,
            required: true,
        },
        bookingDate: {
            type: String,
            required: true
        },
        bookingTime: {
            type: String,
            required: true
        },
        bookingPrice: {
            type: String,
            required: true
        },
        groundName: {
            type: String,
            required: true
        },
        groundLocation: {
            type: String,
            required: true
        },
        groundAddress: {
            type: String,
            required: true
        },
        groundImage: {
            type: String,
            required: true
        }
    }
)

const Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking;