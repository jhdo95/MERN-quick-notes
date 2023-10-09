const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Note = require('../../models/note');

module.exports = {
    create
}


async function create(req, res) {
    try {
      // Create a new note based on the request body and the user ID from authentication
      const newNote = new Note({
        text: req.body.text,
        user: req.user._id, 
      });
  
      // Save the new note to the database
      const savedNote = await newNote.save();
  
      res.status(201).json(savedNote);
    } catch (err) {
      res.status(400).json(err);
    }
  }