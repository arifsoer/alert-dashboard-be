import sequelize from "../../../config/sequelize.js";
import { DataTypes } from "sequelize";

import Machine from "./machine.model.js"
import Reason from "./reason.model.js"

const anomaly = sequelize.define(
  "Anomaly",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    machineId: DataTypes.STRING,
    reasonId: DataTypes.STRING,
    actionId: DataTypes.STRING,
    name: DataTypes.STRING,
    sensor: DataTypes.STRING,
    soundClip: DataTypes.STRING,
    detectedAt: DataTypes.DATE,
    comment: DataTypes.STRING,
    isAlreadyOpen: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Anomalies",
  }
);

anomaly.belongsTo(Machine, {
  as: 'machine',
  foreignKey: 'machineId'
})

anomaly.belongsTo(Reason, {
  as: 'reason',
  foreignKey: 'reasonId'
})

export default anomaly
