const mongoose = require('mongoose');
const polyglot = require('./polyglot');

class mongoSync {
  constructor() {
    mongoose.connect('mongodb://localhost:27017/codeforgeek');
    var userSchema = mongoose.Schema({
      "rethinkId" : String,
      "name" : String,
      "dob": Date,
      "gender": String,
      "location": String
    });
    let model = mongoose.model('users',userSchema);
    this.handleOperation(model);
  }
  handleOperation(model) {
    let self = this;
    let sync = new polyglot();
    sync.on('insert',function(data) {
      let mongoOp = new model();
      mongoOp.rethinkId = data.new_val.id;
      mongoOp.name = data.new_val.name;
      mongoOp.dob = new Date(data.new_val.dob);
      mongoOp.gender = data.new_val.gender;
      mongoOp.location = data.new_val.location;
      mongoOp.save(function(err) {
        if(err) {
          console.log("Error creating mongo data\n",err);
        } else {
          console.log("Synced to MongoDB");
        }
      });
    });
    sync.on('update',function(data) {
      console.log("Mongo --",data);
      model.findOne({"rethinkId": data.old_val.id},function(err,mongoData) {
        mongoData.name = data.new_val.name;
        mongoData.dob = new Date(data.new_val.dob);
        mongoData.gender = data.new_val.gender;
        mongoData.location = data.new_val.location;
        mongoData.save(function(err) {
          if(err) {
            console.log("Error updating mongo data\n",err);
          } else {
            console.log("Synced to MongoDB");
          }
        });
      });
    });
    sync.on('delete',function(data) {
      console.log("Mongo --",data);
      model.find({"rethinkId": data.old_val.id},function(err,mongoData) {
        mongoData = data;
        model.remove({"rethinkId": data.old_val.id},function(err) {
          if(err) {
            console.log("Error deleting mongo data\n",err);
          } else {
            console.log("Synced to MongoDB");
          }
        });
      });
    });
  }
}
module.exports = mongoSync;
