import sequelize from "../index.js"
import s from "sequelize"
const { DataTypes } = s

const User = sequelize.define("user",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},   { timestamps: false })

export default User