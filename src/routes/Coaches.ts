'use strict';

import Router from 'express';
import { create, getAll, getOne, remove } from '../controllers/Coaches';

export const coachesRouter = Router();

coachesRouter.get('/', getAll);
coachesRouter.get('/:coachId', getOne);

coachesRouter.post('/', create);
coachesRouter.delete('/:coachId', remove);
