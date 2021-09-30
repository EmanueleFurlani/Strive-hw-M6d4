import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const ProductCategory = sequelize.define("productCategory", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
},   { timestamps: false });

export default ProductCategory;