const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://prasathmajay_db_user:k27xYAOy8wW773nS@cluster0.djesdhl.mongodb.net/crudapp')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});