const express = require('express')
const cors = require('cors');
require('dotenv').config();

const app = express()
const port = 8080
const db = require('./db')


app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/api/contact', (req, res) => {
  res.json({
        header: "Get in touch, we would love to connect!",
        body: "Welcome to OpenAgent. We've been around since 2013, and our vision is to make it easy for people to buy, sell, and own property.",
        phone: "13 24 34",
        email: "support@openagent.com",
        postalAddress: "PO Box 419, Alexandria NSW 1435",
        businessHours: "Monday - Friday 8:30am - 17:00pm"
  })
})

app.post('/api/submit', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    await db.query(
      'INSERT INTO contacts (first_name, last_name, email, phone_number, message) VALUES ($1, $2, $3, $4, $5)',
      [firstName, lastName, email, phone, message]
    )
    res.status(200).json({message: 'form submitted'})
  } catch (error) {
    console.log('error saving data:', error);
    res.status(500).json({error: 'an erorr occured'})
  }
})


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
})