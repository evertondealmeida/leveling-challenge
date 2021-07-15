class CitySerializer {

    serialize({_doc}) {
        if (!_doc) return null;

        const {
            _id,
            name,
            code,
            code_state
        } = _doc;
        return ({
            _id,
            name,
            code,
            code_state
        });
    }

    paginatedSerialize({ docs, total, limit, page, pages }) {
        return {
            cities: docs.map(result => this.serialize(result)),
            total,
            limit,
            offset: page,
            offsets: pages
        };
    }
}

module.exports = CitySerializer;
