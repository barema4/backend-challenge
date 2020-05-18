import dotenv from 'dotenv';
import app from './server';
import router from './routes/UserRoutes';

const PORT = 8000;
dotenv.config();

app.get('/', (req, res) => {
  res.status(200).send({ message: ' Welcome to Hackerbay backend challenge' });
});
app.use(router);
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({ UnauthorizedError: err.message });
  }
  next();
});

app.server = app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});

const { server } = app;

export default server;
