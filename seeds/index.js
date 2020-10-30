const seedComments = require('./comment-seeds');
const seedSecurities = require('./security-seeds');
const seedThesis = require('./thesis-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USER TAGS SEEDED -----\n');

  await seedSecurities();
  console.log('\n----- SECURITIES SEEDED -----\n');

  await seedThesis();
  console.log('\n----- THESIS SEEDED -----\n');
  
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');


  process.exit(0);
};

seedAll();