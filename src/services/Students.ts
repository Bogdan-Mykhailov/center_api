'use strict';

import { Student } from '../Models/Student';
import { StudentType } from '../types/StudentType';

const getAll = async(group?: string) => {
  let students;

  if (group) {
    students = await Student.findAll({
      where: { group },
      order: ['age'],
    });
  } else {
    students = await Student.findAll({
      order: ['age'],
    });
  }

  return students;
};

const getById = async(studentId: string) => {
  return Student.findByPk(studentId);
};

const create = async(studentBody: StudentType) => {
  const newStudent = {
    ...studentBody,
  };

  return Student.create(newStudent);
};

const remove = async(studentId: string) => {
  return Student.destroy({
    where: { id: studentId },
  });
};

export const studentsService = {
  getAll,
  create,
  remove,
  getById,
};
