'use strict';
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const stateSchema = new Schema({
        name: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        uf: {
            type: String,
            required: true
        },
        code: {
            type: Number,
            required: true,
        }
    }, { versionKey: false });

    stateSchema.plugin(paginate);

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
