'use strict';

import { studentsService } from '../services/Students';
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  try {
    const { group } = req.query;

    const students = await studentsService.getAll(group as string);

    res.send(students);
  } catch (error) {
    global.console.log(error);
    res.sendStatus(500);
  }
};

export const getOne = async(req: Request, res: Response) => {
  const { studentId } = req.params;

  try {
    const currentStudent = await studentsService.getById(studentId);

    if (!currentStudent) {
      res.sendStatus(404);

      return;
    }

    res.send(currentStudent);
  } catch (error) {
    global.console.log(error);
    res.sendStatus(500);
  }
};

export const create = async(req: Request, res: Response) => {
  const body = req.body;

  try {
    const newStudent = await studentsService.create(body);

    res.statusCode = 201;
    res.send(newStudent);
  } catch (error) {
    global.console.log(error);
    res.sendStatus(500);
  }
};

export const remove = async(req: Request, res: Response) => {
  const { studentId } = req.params;

  try {
    const currentStudent = await studentsService.getById(studentId);

    if (!currentStudent) {
      res.sendStatus(404);

      return;
    }

    await studentsService.remove(studentId);
    res.statusCode = 204;
  } catch (error) {
    global.console.log(error);
    res.sendStatus(500);
  }
};
