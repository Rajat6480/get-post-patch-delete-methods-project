const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allMongoDbUsers = await User.find({});
  // res.setHeader("myName","rajat")
  return res.json(allMongoDbUsers);
}

async function handleGetUniqueUser(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found !" });
  }
  return res.json(user);
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  // console.log(body);
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("result", result);
  return res.status(201).json({ msg: "Success..." });
}

async function handleUpdateUser(req, res) {
  const body = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  return res.status(200).json({ msg: "successful update..." });
}

async function handleDeleteUser(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ id: req.params.id, msg: "DELETED SUCCESSFULLY...." });
}

module.exports = {
  handleGetAllUsers,
  handleCreateNewUser,
  handleGetUniqueUser,
  handleUpdateUser,
  handleDeleteUser,
};
