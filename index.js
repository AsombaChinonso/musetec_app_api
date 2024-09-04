const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const EMAIL = 'admin@gmail.com';
const PASSWORD = 'admin123';

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === EMAIL && password === PASSWORD) {
        res.status(200).send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
