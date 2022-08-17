import sequelize from "../../../config/sequelize.js";
import { DataTypes } from "sequelize";

export default sequelize.define(
  "Action",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Actions",
  }
);
