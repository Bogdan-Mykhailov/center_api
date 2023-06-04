'use strict';

import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';

export const Coach = sequelize.define(
  'Coaches',
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
    group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contacts: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    skills: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    tableName: 'coaches',
    createdAt: false,
    updatedAt: false,
  },
);

Coach.sync({ alter: true });
