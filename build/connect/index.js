let Sequelize = require('sequelize');
module.exports = new Sequelize('ticketapp', 'postgres', 'shweta', {
    host: 'localhost',
    logging: console.log,
    dialect: 'postgres',
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
// const sequelize = new Sequelize(
//   'ticketapp',
//   'postgres',
//   'shweta',
//   {
//     host: 'localhost',
//     dialect: 'postgres', // or mysql
//     logging: false,
//   }
// );
// export default sequelize;
//# sourceMappingURL=index.js.map