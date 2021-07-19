const DUPLICATE_KEY_ERROR_CODE = 11000;
const errorHandler = require('src/interfaces/http/errors/HttpErrors.js');
const clear = require('src/utils/ClearObject');


class Repository {
    constructor({ ResourceModel }) {
        this.ResourceModel = ResourceModel;
    }

    async create(data) {
        try {
            return await this.ResourceModel.create(data);
        } catch (error) {
            if (error.code === DUPLICATE_KEY_ERROR_CODE)
                throw errorHandler.duplicateKeyError(error.message);
            throw error;
        }
    }

    async findPaginated({ page = 1, limit = 100, query = {}, clearQuery = true }) {

        if (clearQuery) clear(query);

        const option = { page: Number(page), limit: Number(limit) };
        const result = await this.ResourceModel.paginate(query, option);
        if (!result || result === {}) return null;
        return result.docs;
    }

    async delete(id) {
        const result = await this.ResourceModel.findByIdAndRemove(id);
        if (!result || result === {}) return null;
        return  result._doc;
    }

    async get(query) {
        const result = await this.ResourceModel.findById(query);
        if (!result || result === {}) return null;
        return  result._doc;
    }

    async update(id, query) {
        try {
            const result = await this.ResourceModel.findByIdAndUpdate(id, query, {
                new: true
            });
            if (!result || result === {}) return null;
            return  result._doc;
        } catch (error) {
            if (error.code === DUPLICATE_KEY_ERROR_CODE)
                throw errorHandler.duplicateKeyError(error.message);
            throw error;
        }
    }
}

module.exports = Repository;
