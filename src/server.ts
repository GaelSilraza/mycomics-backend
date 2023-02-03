import express from 'express';
import 'dotenv/config';
import router from './routes';
import { AppDataSource } from './config/config.development';

const app = express();
const port = process.env.BACKEND_PORT;

app.use(express.json());
app.use(router)

app.listen(port, () => {
  console.log('O servidor está rodando');
});

AppDataSource.initialize()
.then(() => {
  console.log('Conectado com o banco de dados');
})
.catch((error) => console.log(error));