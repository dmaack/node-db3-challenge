const db = require('../data/db-config')

module.exports = {
    find,
    findById
}

function find() {
    return db.select('*').from('schemes')
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}