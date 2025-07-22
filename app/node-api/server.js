const express = require('express');
const app = express();

// ✅ Always use Azure-injected PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Afrooz from Azure 🚀');
});

// ✅ Bind to 0.0.0.0 for Azure Linux compatibility
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
