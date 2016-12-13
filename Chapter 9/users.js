const express = require('express');
const router = express.Router();
const userModel = require('./userModel');

router.route('/')
  .get((req,res) => {
    let userObject = new userModel();
    userObject.getAllUsers(function(err,userResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : userResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success", "data" : userResponse});
    });
  })
  .post((req,res) => {
    let userObject = new userModel();
    userObject.addNewUser(req.body,function(err,userResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : userResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : userResponse});
    });
  })
  .put((req,res) => {
    let userObject = new userModel();
    userObject.updateUser(req.body,function(err,userResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : userResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : userResponse});
    });
  })
  .delete((req,res) => {
    let userObject = new userModel();
    userObject.deleteUser(req.body,function(err,userResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : userResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : userResponse});
    });
  });

module.exports = router;
