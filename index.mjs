import express from 'express';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './fibonacci.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use('/fibonacci', router);

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
