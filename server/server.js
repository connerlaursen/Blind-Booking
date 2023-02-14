const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));