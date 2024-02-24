const express = require('express');
const router = express.Router();

// Handlers for CRUD functionality go here

module.exports = router;

const express = require('express');
const Student = require('./models/Student');

// CREATE
router.post('/', async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.render('students/index', { students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add handlers for UPDATE and DELETE as needed

module.exports = router;
