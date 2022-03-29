const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// cors
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

// middlewares
app.use(express.static('public'))


const sundaeOptionsRaw = fs.readFileSync('./sundae-options.json', 'utf-8');
const sundaeOptions = JSON.parse(sundaeOptionsRaw);

app.get('/scoops', (req, res) => {
  res.json(sundaeOptions.iceCreamFlavors)
})

app.get('/toppings', (req, res) => {
  res.json(sundaeOptions.toppings)
})

app.post('/order', (req, res) => {
  const orderNumber = Math.floor(Math.random() * 10000000000);

  res
    .status(201)
    .json({ orderNumber })
})

if (require.main === module) {
  app.listen(3030, () => console.log('Sundae server listening on port 3030!'))
}

module.exports = app;