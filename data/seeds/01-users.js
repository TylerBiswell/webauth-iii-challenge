const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'michael',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'management',
        },
        {
          username: 'karen',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'management',
        },
        {
          username: 'pam',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'sales',
        },
        {
          username: 'jim',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'sales',
        },
        {
          username: 'dwight',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'sales',
        },
        {
          username: 'andy',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'sales',
        },
        {
          username: 'stanley',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'sales',
        },
        {
          username: 'phyllis',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'sales',
        },
        {
          username: 'angela',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'accounting',
        },
        {
          username: 'kevin',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'accounting',
        },
        {
          username: 'oscar',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'accounting',
        },
        {
          username: 'meredith',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'product oversight',
        },
        {
          username: 'kelly',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'product oversight',
        },
        {
          username: 'creed',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'product oversight',
        },
        {
          username: 'erin',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'reception',
        },
        {
          username: 'ryan',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'temps',
        },
        {
          username: 'darryl',
          password: bcrypt.hashSync('theoffice', 8),
          department: 'warehouse',
        },
      ]);
    });
};