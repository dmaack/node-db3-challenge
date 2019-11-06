const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find() {
    return db.select('*').from('schemes')
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
    return db('schemes')
        .join('steps', 'schemes.id', '=', 'steps.scheme_id')
        .select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where({ scheme_id: id })
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(ids => ({id: ids[0]}))
}

function addStep(step, scheme_id) {
    //console.log(step)
    const createStep = {...step, scheme_id}

    return db('steps')
        .insert(createStep)
}

function update(changes, id) {
    return db('schemes')
    .where('id', Number(id))
    .update(changes)
}

function remove(id) {
    return db('schemes')
    .where('id', Number(id))
    .del()
}