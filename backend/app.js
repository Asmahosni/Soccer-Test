const express = require('express');
//create backend application
const app = express();
//image config
const multer = require("multer");
const path = require('path');
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//define image folder destination
app.use('/images', express.static(path.join('backend/images')))
//import match model from models/match.js
const Match = require('./models/match');
//import mongoose module
const mongoose = require('mongoose');
//connect application to db
mongoose.connect('mongodb://localhost:27017/soccerDB', { useNewUrlParser: true, useUnifiedTopology: true });
const User = require('./models/user');
const Player = require('./models/player');
const Stadium = require('./models/stadium');
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
//define images to insert
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    // verify if image is correspends to mime type
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});
//get all matches 
app.get('/allMatches', (req, res) => {
  //traitement
  console.log('i am here for allMatches');
  //connect to DB and get all Matches
  // let matches = [
  //     {id:1 ,scoreOne : 2, scoreTwo : 5, teamOne : 'FCB', teamTwo : 'RMD' },
  //     {id:2 ,scoreOne : 2, scoreTwo : 2, teamOne : 'EST', teamTwo : 'CA' },
  //     {id:3 ,scoreOne : 0, scoreTwo : 4, teamOne : 'ESS', teamTwo : 'CSS' }
  //   ];

  Match.find((err, docs) => {
    if (err) {
      console.log(('Error'), err);
    } else {
      res.status(200).json({
        message: 'here all objects',
        matches: docs
      });
    }
  })


});
// add match
app.post('/addMatch', multer({ storage: storage }).single('image'), (req, res) => {
  console.log('Here in adding');
  console.log('req;file', req.file);
  url = req.protocol + '://' + req.get('host');
  const match = new Match({
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    image: url + '/images/' + req.file.filename
  });
  //stocker dans DB
  match.save().then(
    result => {
      if (result) {
        res.status(200).json({
          message: "Added Successfully"
        });
      }
    }
  );
});
//delete match
app.delete('/deleteMatch/:id', (req, res) => {
  console.log('here in delete', req.params.id);
  //recuperer l'id : req.params.id
  //delete 
  Match.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted Successfully'
        });
      }
    }
  )
});
//displayMatch
app.get('/displayMatch/:id', (req, res) => {
  console.log('Here in get', req.params.id);
  Match.findOne({ _id: req.params.id }).then(
    data => {
      if (data) {
        res.status(200).json({
          match: data
        })
      }
    }
  )
})
//edit match
app.put('/editMatch/:id', (req, res) => {
  console.log("here in edit", req.params.id);
  const newMatch = new Match({
    _id: req.body._id,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo
  });
  //update takes 2 params : 1st for search object and 2nd to repl
  Match.update({ _id: req.params.id }, newMatch).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'updated Successfully'
        })
      }
    }
  );
});


//get all players
app.get('/allPlayers', (req, res) => {
  //traitement
  console.log('i am here for allPLayers');
  Player.find((err, docs) => {
    if (err) {
      console.log(('Error'), err);
    } else {
      res.status(200).json({
        message: 'here all players',
        players: docs
      });
    }
  })
});
//add player
app.post('/addPlayer', multer({ storage: storage }).single('image'), (req, res) => {
  console.log('Here in adding Player');
  console.log('req;file', req.file);
  url = req.protocol + '://' + req.get('host');
  const player = new Player({
    name: req.body.name,
    date: req.body.date,
    image: url + '/images/' + req.file.filename
  });
  //stocker dans DB
  player.save().then(
    result => {
      if (result) {
        res.status(200).json({
          message: "Player Added Successfully"
        });
      }
    }
  );
});
//delete Player
app.delete('/deletePlayer/:id', (req, res) => {
  console.log('here in delete', req.params.id);
  //recuperer l'id : req.params.id
  //delete 
  Player.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Player Deleted Successfully'
        });
      }
    }
  )
});


//get all users
app.get('/allUsers', (req, res) => {
  //traitement
  console.log('i am here for allusers');
  User.find((err, docs) => {
    if (err) {
      console.log(('Error'), err);
    } else {
      res.status(200).json({
        message: 'here all objects',
        users: docs
      });
    }
  })


});

//addUser
app.post('/addUser', multer({ storage: storage }).single('image'), (req, res) => {
  console.log('Here in adding User');
  console.log('req;file', req.file);
  url = req.protocol + '://' + req.get('host');
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    image: url + '/images/' + req.file.filename
  });
  //stocker dans DB
  user.save().then(
    result => {
      if (result) {
        res.status(200).json({
          message: "Added Successfully"
        });
      }
    }
  );
});

//login user
app.post('/login',(req,res) => {
  console.log('here in logging',req.body);
  User.find({email : req.body.email, password : req.body.password}).then(
    data  => {
    if (data) {
      res.status(200).json({
        user : data 
      })
    }
  })
});

//search match
app.get('/api/search/:term',(req,res) => {
  console.log('req.body', req.body);
 console.log('req.params', req.params.term);
 Match.find({ teamOne: req.params.term }).then(
 (result) => {
 console.log('Here searched result', result);
 if (result) {
 res.send(result);
 }
 }
 )
});

//get all stadiums
app.get('/allStadiums', (req, res) => {
  //traitement
  console.log('i am here for allstadiums');
  Stadium.find((err, docs) => {
    if (err) {
      console.log(('Error'), err);
    } else {
      res.status(200).json({
        message: 'here all stadiums',
        stadiums: docs
      });
    }
  })
});
//delete stadium
app.delete('/deleteStadium/:id', (req, res) => {
  console.log('here in delete', req.params.id);
  //recuperer l'id : req.params.id
  //delete 
  Stadium.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Stadium Deleted Successfully'
        });
      }
    }
  )
});
//add stadium
app.post('/addStadium',  (req, res) => {
  console.log('Here in adding Stadium');
  const stadium = new Stadium({
    name: req.body.name,
    country: req.body.country,
    capacity: req.body.capacity
  });
  //stocker dans DB
  stadium.save().then(
    result => {
      if (result) {
        res.status(200).json({
          message: "stadium Added Successfully"
        });
      }
    }
  );
});
module.exports = app;

