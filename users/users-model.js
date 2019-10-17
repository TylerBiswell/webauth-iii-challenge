const db = require('../data/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db('users').select('id', 'username', 'department');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
    .select('id', 'username', 'department')
    .where({ id })
    .first();
}