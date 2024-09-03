import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import dotenv from 'dotenv';
import Contact from './models/contact.js'
import syncDatabase from './models/index.js';

dotenv.config();

const app = express()
const port = 8080

syncDatabase();

app.use(cors());

app.use(json())
app.use(urlencoded({ extended: true }));


app.get(process.env.API_URL_CONTACT, (req, res) => {
  res.json({
    header: "Get in touch, we would love to connect!",
    body: "Welcome to OpenAgent. We've been around since 2013, and our vision is to make it easy for people to buy, sell, and own property.",
    phone: "13 24 34",
    email: "support@openagent.com",
    postalAddress: "PO Box 419, Alexandria NSW 1435",
    businessHours: "Monday - Friday 8:30am - 17:00pm"
  })
})

app.post(process.env.API_URL_SUBMIT,
  [
    body('first_name').trim().notEmpty().withMessage('First name is required'),
    body('last_name').trim().notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email address').normalizeEmail(),
    body('phone_number').optional().trim().isMobilePhone().withMessage('Invalid phone number'),
    body('message').optional().trim().escape(),
  ],

  async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { first_name, last_name, email, phone_number, message } = req.body;


    try {
      await Contact.create({ first_name, last_name, email, phone_number, message })
      res.status(200).json({ message: 'form submitted' })
    } catch (error) {
      console.log('error saving data:', error);
      res.status(500).json({ error: 'an erorr occured' })
    }
  })


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
})