const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

const service_providers = new Schema({
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
    Login_email: {
        type: String,
        required: true
    },
    Location: {
        Latitude: {
            type: Schema.Types.Double
        },
        Longitude: {
            type: Schema.Types.Double
        }
    },
});

const Service_providers = mongoose.model('service_providers', service_providers);

module.exports = Service_providers;