import sequelize from "../../../config/sequelize.js";
import { DataTypes } from "sequelize";

export default sequelize.define(
  "Machine",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    normalSound: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Machines",
  }
);
