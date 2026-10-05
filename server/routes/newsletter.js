const express = require('express');
const router  = express.Router();

// POST /api/newsletter
router.post('/', (req, res) => {
  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
  }

  console.log(`📧 Newsletter subscription: ${email}`);

  res.status(200).json({
    success: true,
    message: 'You have been subscribed to our health newsletter!',
    data: { email, subscribedAt: new Date().toISOString() },
  });
});

module.exports = router;
