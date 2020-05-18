import app from './server';

const PORT = 8000;

app.get('/', (req, res) => {
  res.status(200).send({ message: ' Welcome to Hackerbay backend challenge' });
});

app.server = app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});

const server = app.server;

export default server;
