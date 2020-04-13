const express = require('express');

// Constant
const PORT = 3000;

const app = express();

// Teste servidor
app.get('/', (req, res) => res.send('Hello World'));

app.listen(PORT, () => console.log(`Sever listening on port: ${PORT}`));
