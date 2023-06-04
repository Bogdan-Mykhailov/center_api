'use strict';

import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';

export const Student = sequelize.define(
  'Students',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contacts: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    parents: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    tableName: 'students',
    createdAt: false,
    updatedAt: false,
  },
);

Student.sync({ alter: true });
