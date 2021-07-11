'use strict';
const { Schema } = require('mongoose');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const stateSchema = new Schema({
        code: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        uf: {
            type: String,
            required: true
        }
        
    });

    stateSchema.index(
        { code: 1 },
        { unique: true }
    );

    stateSchema.index(
        { name: 1 },
        { unique: true }
    );

    stateSchema.index(
        { uf: 1 },
        { unique: true }
    );

    return connection.model('state', stateSchema);
};
