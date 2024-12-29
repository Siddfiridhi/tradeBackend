const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import routes

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const dbURI = process.env.dbURI; // Ensure the correct environment variable name is used
if (!dbURI) {
    console.error('Error: MONGODB_URI is not defined in the environment variables.');
    process.exit(1); // Exit the application if the URI is missing
}
// 'mongodb://localhost:27017/tradeSurveyDB'
mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes); // Use the user routes

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
