'use strict';

import express from 'express';
import { studentsRouter } from './routes/Students';
import { coachesRouter } from './routes/Coaches';

const PORT = 4000;

const createServer = () => {
  const app = express();

  app.use('/students', express.json(), studentsRouter);
  app.use('/coaches', express.json(), coachesRouter);

  return app;
};

createServer().listen(PORT, () => {
  global.console.log(`Server is running on port: http://localhost:${PORT}`);
});
