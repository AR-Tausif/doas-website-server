import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import { duaRouter } from './routes/dua.route';
import { categoryRouter } from './routes/category.route';
import { subCategoryRouter } from './routes/sub-category.route';

const app = express();

// Add these middlewares before routes
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/dua', duaRouter);
app.use('/categories', categoryRouter);
app.use('/sub-categories', subCategoryRouter);
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello world',
  });
});

// use global error handler after routes
app.use(errorHandler);
export default app;
