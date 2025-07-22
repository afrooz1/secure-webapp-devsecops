const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('🚀 Node API is live – deployed on Azure!');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('📬 Contact form submission:', { name, email, message });

  res.status(200).json({ success: true, msg: 'Message received!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
