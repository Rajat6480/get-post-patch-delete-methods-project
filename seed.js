const faker = require("faker");
const mongoose = require("mongoose");
const User = require("./models/user"); 

async function seedData() {
  const uri = "mongodb://localhost:27017/remoteStorage";
  const seed_count = 5000;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log("error", err);
    });

  let timeSeriesData = [];
  // create 5000 fake data
  for (let i = 0; i < seed_count; i++) {
    const first_name = faker.name.firstName();
    const last_name = faker.name.lastName();
    const email = faker.internet.email(); 
    const gender = faker.random.arrayElement(["male", "female"]); 
    const job_title = faker.name.jobTitle();
    
    timeSeriesData.push({
      firstName: first_name,
      lastName: last_name,
      email: email,
      gender: gender,
      jobTitle: job_title,
    });
  }

  const seedDB = async () => {
    await User.insertMany(timeSeriesData); // Use User model instead of Product
  };

  seedDB().then(() => {
    mongoose.connection.close();
    console.log("seed success");
  });
}

seedData();
