const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); 
const app = express();


app.use(bodyParser.json());
app.use(cors());


<<<<<<< HEAD
const dbURI = process.env.dbURI; 
=======
// MongoDB Connection
const dbURI = process.env.dbURI; // Use the environment variable for MongoDB URI
>>>>>>> 4e78fdce29d8ec385a559324fe6024190bbcf4db
if (!dbURI) {
    console.error('Error: MONGODB_URI is not defined in the environment variables.');
    process.exit(1); 
}

mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
=======

>>>>>>> 4e78fdce29d8ec385a559324fe6024190bbcf4db
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
