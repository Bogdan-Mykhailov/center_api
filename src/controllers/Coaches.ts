'use strict';

import { coachesService } from '../services/Coaches';
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  try {
    const { group } = req.query;

    const coaches = await coachesService.getAll(group as string);

    res.send(coaches);
  } catch (error) {
    global.console.log(error);
    res.sendStatus(500);
  }
};

export const getOne = async(req: Request, res: Response) => {
  const { coachId } = req.params;

  try {
    const currentCoach = await coachesService.getById(coachId);

    if (!currentCoach) {
      res.sendStatus(404);

      return;
    }

    res.send(currentCoach);
  } catch (error) {
    global.console.log(error);
    res.sendStatus(500);
  }
};

export const create = async(req: Request, res: Response) => {
  const body = req.body;

  try {
    const newCoach = await coachesService.create(body);

    res.statusCode = 201;
    res.send(newCoach);
  } catch (error) {
    global.console.log(error);
    res.sendStatus(500);
  }
};

export const remove = async(req: Request, res: Response) => {
  const { coachId } = req.params;

  try {
    const currentCoach = await coachesService.getById(coachId);

    if (!currentCoach) {
      res.sendStatus(404);

      return;
    }

    await coachesService.remove(coachId);
    res.statusCode = 204;
  } catch (error) {
    global.console.log(error);
    res.sendStatus(500);
  }
};
