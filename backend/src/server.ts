import express from 'express';

// cors - allow access to this server from other address
import cors from 'cors';;

// error handler
import 'express-async-errors';
import errorHandler from './errors/handlers';

// db
import './database/connection';

// routes
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333);