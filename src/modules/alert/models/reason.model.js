import sequelize from "../../../config/sequelize.js";
import { DataTypes } from "sequelize";

import Machine from './machine.model.js'

const reason = sequelize.define(
  "Reason",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    machineId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Reasons",
  }
);

reason.belongsTo(Machine, {
  as: 'machine',
  foreignKey: 'machineId'
})

export default reason
