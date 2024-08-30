// app.js
const express = require('express');

const cors = require('cors');

// const { sequelize } = require('./models');
const { sequelize } = require('./config/config'); // Correct


const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Express is running');
});

app.use('/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.sync();
});
