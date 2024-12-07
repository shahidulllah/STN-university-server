import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

//perser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1', router);

//checking
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello from PH University!');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
