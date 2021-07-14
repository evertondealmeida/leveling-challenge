'use strict';
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const citySchema = new Schema({
        code: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            lowercase: true,
            required: true
        },
        code_state: {
            type: Number,
            required: true
        }
    }, { versionKey: false });

    citySchema.plugin(paginate);

    citySchema.index(
        { code: 1 },
        { unique: true }
    );

    return connection.model('city', citySchema);
};
