const DUPLICATE_KEY_ERROR_CODE = 11000;
const errorHandler = require('src/interfaces/http/presentation/errors/HttpErrors.js');
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
        return result.docs;
    }

    async delete(id) {
        return await this.ResourceModel.findByIdAndRemove(id);
    }

    async get(query) {
        return await this.ResourceModel.findById(query);
    }

    async update(id, query) {
        try {
            return await this.ResourceModel.findByIdAndUpdate(id, query, {
                new: true
            });
        } catch (error) {
            if (error.code === DUPLICATE_KEY_ERROR_CODE)
                throw errorHandler.duplicateKeyError(error.message);
            throw error;
        }
    }
}

module.exports = Repository;
