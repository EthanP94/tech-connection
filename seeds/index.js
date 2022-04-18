const seedPosts = require('./post-seeds');

const sequelize = require('/config/connnection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedAll();