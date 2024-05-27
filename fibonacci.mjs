import express from 'express';

const router = express.Router();

function fibonacci() {
  for (let i = 0; i < 9999999999; i++) {
    let i = 10; // do nothing
  }
}

router.get('/calculate', (req, res) => {
  console.log('starting');
  console.time('fibonacci');
  fibonacci();
  console.timeEnd('fibonacci');
  res.status(200).send({ result: 'done' });
});

export default router;
