class ClientSerializer {

    serialize({_doc}) {
        if (!_doc) return null;

        const {
            _id,
            name,
            gender,
            cpf,
            birth_date,
            code_city
        } = _doc;
        return ({
            _id,
            name,
            gender,
            cpf,
            birth_date,
            code_city
        });
    }

    paginatedSerialize({ docs, total, limit, page, pages }) {
        return {
            clients: docs.map(result => this.serialize(result)),
            total,
            limit,
            offset: page,
            offsets: pages
        };
    }
}

module.exports = ClientSerializer;
