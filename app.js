const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const astrologerRoutes = require('./src/routes/astrologerRoutes');
const userRoutes = require('./src/routes/userRoutes');

app.use('/astrologers', astrologerRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});