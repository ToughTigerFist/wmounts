const express = require("express");
const app = express();
const mountRoutes = express.Router();

let Mount = require("../utils/mongo");

mountRoutes.route("/addOne").post(function(req, res) {
  let mount = new Mount(req.body);
  mount
    .save()
    .then(mount => {
      res
        .status(200)
        .json({ Mount: mount['name'] + " has been added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save");
    });
});
// TODO Fix batch update
mountRoutes.route("/updateMongoCollection").post(function(req, res) {
    req.body.forEach(mount => {
        
        let name = mount["name"];
        let spellId = mount["spellId"];
        let creatureId = mount["creatureId"];
        let itemId = mount["itemId"];
        let qualityID = mount["qualityID"];
        let icon = mount["icon"];
        let isGround = mount["isGround"];
        let isFlying = mount["isFlying"];
        let isAquatic = mount["isAquatic"];
        let isJumping = mount["isJumping"];
        Mount.collection.updateOne(
          {"name" : name},
          { '$set' :{
              'name': name,
              'spellId': spellId,
              'creatureId': creatureId,
              'itemId': itemId,
              'qualityID': qualityID,
            'icon': icon,
            'isGround': isGround,
            'isFlying': isFlying,
            'isAquatic': isAquatic,
            'isJumping': isJumping
          }},
          upsert=true,
          function(res,err) {
              if (err) {
                  console.log(err)
              }
              else {
                  console.log(res)
              }
          }
          );
    });
});

module.exports = mountRoutes;
