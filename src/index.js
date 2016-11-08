import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/skb2a', (req, res) => {
  const summ = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(summ.toString());
  // res.json({
  //   'Сумма "a" и "b" = ': summ.toString(),
  // });
});

// app.get('/', (req, res) => {
//   res.json({
//     hello: 'JS World',
//   });
// });

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
