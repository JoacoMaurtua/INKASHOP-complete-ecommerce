const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456aea',10),
    isAdmin: true
  },

  {
    name: 'Joaquin Maurtua',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456aea',10)
  },

  {
    name: 'Stefano Quiroz',
    email: 'tefita@example.com',
    password: bcrypt.hashSync('123456aea',10)
  },
];

module.exports = users;