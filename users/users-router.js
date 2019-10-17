const router = require('express').Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

// POST /api/register endpoint
router.post('/register', (req, res) => {
  res.send('Hello from POST /api/register endpoint');
});

// POST /api/login endpoint
router.post('/login', (req, res) => {
  res.send('Hello from POST /api/login endpoint');
});

// GET /api/users endpoint
router.get('/users', restricted, (req, res) => {
  res.send('Hello from GET /api/users endpoint');
});

module.exports = router;