class StateSerializer {

    serialize({_doc}) {
        if (!_doc) return null;

        const {
            _id,
            name,
            uf,
            code
        } = _doc;
        return ({
            _id,
            name,
            uf,
            code
        });
    }

    paginatedSerialize({ docs, total, limit, page, pages }) {
        return {
            states: docs.map(result => this.serialize(result)),
            total,
            limit,
            offset: page,
            offsets: pages
        };
    }
}

module.exports = StateSerializer;
