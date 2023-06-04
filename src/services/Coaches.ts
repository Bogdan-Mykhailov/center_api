'use strict';

import { CoachType } from '../types/CoachType';
import { Coach } from '../Models/Coach';

const getAll = async(group?: string) => {
  let coaches;

  if (group) {
    coaches = await Coach.findAll({
      where: { group },
      order: ['id'],
    });
  } else {
    coaches = await Coach.findAll({
      order: ['id'],
    });
  }

  return coaches;
};

const getById = async(coachId: string) => {
  return Coach.findByPk(coachId);
};

const create = async(coachBody: CoachType) => {
  const newCoach = {
    ...coachBody,
  };

  return Coach.create(newCoach);
};

const remove = async(coachId: string) => {
  return Coach.destroy({
    where: { id: coachId },
  });
};

export const coachesService = {
  getAll,
  create,
  remove,
  getById,
};
