import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import { duaRouter } from './routes/dua.route';
import { categoryRouter } from './routes/category.route';

const app = express();
app.use(cors({origin: '*'}));

app.use('/dua', duaRouter);
app.use('/categories', categoryRouter);
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello world',
  });
});

// use global error handler after routes
app.use(errorHandler);
export default app;
