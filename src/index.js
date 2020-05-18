import dotenv from 'dotenv';
import app from './server';
import router from './routes/UserRoutes';

const PORT = 8000;
dotenv.config();

app.get('/', (req, res) => {
  res.status(200).send({ message: ' Welcome to Hackerbay backend challenge' });
});
app.use(router);

app.server = app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});

const { server } = app;

export default server;
