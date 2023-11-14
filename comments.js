// Create web server

// Import modules
var express = require("express");
var router = express.Router();
var Comments = require("../models/comments.js");

// Create routes
// Get all comments
router.get("/", function(req, res) {
  Comments.find({}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Post new comment
router.post("/", function(req, res) {
  var newComment = new Comments({
    name: req.body.name,
    comment: req.body.comment,
    created: Date.now()
  });
  newComment.save(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Delete comment
router.delete("/:id", function(req, res) {
  Comments.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Export router
module.exports = router;
