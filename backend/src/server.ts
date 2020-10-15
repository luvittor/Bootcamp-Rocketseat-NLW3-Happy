import express from 'express';

// error handler
import 'express-async-errors';
import errorHandler from './errors/handlers';

// db
import './database/connection';

// routes
import routes from "./routes";

const app = express();

app.use(express.json());

app.use(errorHandler);
app.use(routes);

app.listen(3333);