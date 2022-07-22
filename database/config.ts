import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;