'use strict';
const { Schema } = require('mongoose');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const citySchema = new Schema({
        code: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        code_state: {
            type: String,
            required: true
        }
        
    });

    citySchema.index(
        { code: 1 },
        { unique: true }
    );

    return connection.model('city', citySchema);
};
