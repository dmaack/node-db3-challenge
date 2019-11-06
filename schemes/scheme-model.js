const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db.select('*').from('schemes')
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(ids => ({id: ids[0]}))
}