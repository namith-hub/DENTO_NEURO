const express = require('express');
const router  = express.Router();

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  console.log(`📬 Contact form: ${name} | ${email}`);

  res.status(200).json({
    success: true,
    message: 'Thank you for reaching out! We will get back to you within 24 hours.',
    data: { ticketId: `TKT-${Date.now()}`, name, email, status: 'received' },
  });
});

module.exports = router;
