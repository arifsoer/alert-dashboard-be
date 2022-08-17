import sequelize from "../../../config/sequelize.js";
import { DataTypes } from "sequelize";

export default sequelize.define(
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
