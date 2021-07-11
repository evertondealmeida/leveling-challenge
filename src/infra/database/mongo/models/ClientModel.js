'use strict';
const { Schema } = require('mongoose');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const clientSchema = new Schema({
        code_city: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        birth_date: {
            type: Date,
            required: true
        }
        
    });

    clientSchema.index(
        { cpf: 1 },
        { unique: true }
    );

    return connection.model('client', clientSchema);
};
