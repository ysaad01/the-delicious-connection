const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});

  // create user data
  const userData = [];

  userData.push({ "username": "Robert", "email": "robert@email.com", "password": "password1234" });
  userData.push({ "username": "Will", "email": "will@email.com", "password": "password1234" });
  userData.push({ "username": "Yasmine", "email": "yasmine@email.com", "password": "password1234" });
  userData.push({ "username": "Matt", "email": "matt@email.com", "password": "password1234" });

  const createdUsers = await User.collection.insertMany(userData);

  console.log('all done!');
  process.exit(0);
});
