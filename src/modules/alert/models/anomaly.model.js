import sequelize from "../../../config/sequelize.js";
import { DataTypes } from "sequelize";

export default sequelize.define(
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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Anomalies",
  }
);
