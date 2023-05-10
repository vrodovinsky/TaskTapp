const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service_providers = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Services: [
        new Schema({
            Name: {
                type: String,
                required: true
            },
            Description: {
                type: String,
                required: true
            },
            Price: {
                type: String,
                required: true
            }
        })
    ],
    User_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Location: {
        type: String
    },
    __v: {
        type: Number
    }
});

const Service_providers = mongoose.model('service_providers', service_providers);

module.exports = Service_providers;