const express = require('express');
const router  = express.Router();

// POST /api/appointment
router.post('/', (req, res) => {
  const { name, phone, email, department, doctor, date, time, message } = req.body;

  // Basic validation
  if (!name || !phone || !email || !department || !doctor || !date || !time) {
    return res.status(400).json({
      success: false,
      message: 'All required fields must be provided.',
    });
  }

  // In a real app: save to DB, send confirmation email/SMS
  console.log(`📅 New appointment: ${name} | ${department} | ${date} ${time}`);

  res.status(201).json({
    success: true,
    message: 'Appointment request received! We will confirm within 2 hours.',
    data: {
      confirmationId: `DNC-${Date.now()}`,
      name,
      department,
      doctor,
      date,
      time,
      status: 'pending',
    },
  });
});

module.exports = router;
