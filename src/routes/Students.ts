'use strict';

import Router from 'express';
import { getAll, create, remove, getOne } from '../controllers/Students';

export const studentsRouter = Router();

studentsRouter.get('/', getAll);
studentsRouter.get('/:studentId', getOne);

studentsRouter.post('/', create);
studentsRouter.delete('/:studentId', remove);
