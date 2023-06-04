'use strict';

import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.URI, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});
