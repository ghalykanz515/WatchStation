const express = require('express');
const router = express.Router();

let tickets = [];

router.get('/', (req, res) => {
  res.json(tickets);
});

router.post('/', (req, res) => {
  const ticket = req.body;
  tickets.push(ticket);
  res.status(201).json(ticket);
});

router.delete('/:id', (req, res) => {
  const ticketId = parseInt(req.params.id);
  tickets = tickets.filter((ticket) => ticket.id !== ticketId);
  res.json({ message: 'Ticket deleted' });
});

module.exports = router;
