var userService = require("./userService");

var getDataControllerFn = async (req, res) => {
  var employee = await userService.getDataFromDBService();
  res.send({ status: true, data: employee });
};

var createUserControllerFn = async (req, res) => {
  var status = await userService.createUserDBService(req.body);
  if (status) {
    res.send({ status: true, message: "User created successfully" });
  } else {
    res.send({ status: false, message: "Error creating user" });
  }
};

var updateUserController = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  var result = await userService.updateUserDBService(req.params.id, req.body);

  if (result) {
    res.send({ status: true, message: "User updated successfully" });
  } else {
    res.send({ status: false, message: "user updating failed" });
  }
};

var deleteUserController = async (req, res) => {
  console.log(req.params.id);

  var result = await userService.deleteUserDBService(req.params.id);

  if (result) {
    res.send({ status: true, message: "user deleted successfully" });
  } else {
    res.send({ status: false, message: "user deletion failed" });
  }
};

module.exports = {
  getDataControllerFn,
  createUserControllerFn,
  updateUserController,
  deleteUserController,
};
