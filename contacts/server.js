var express = require('express');

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.use(app.router);
  app.use(express.static(__dirname));
  app.use(express.static(__dirname + "/.."));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


var guid = 0;

var contacts = [
  {
    guid: ++guid,
    firstName: 'Peter',
    lastName: 'Wagenet',
    phoneNumbers: ['(415) 555-2380']
  },

  {
    guid: ++guid,
    firstName: 'Yehuda',
    lastName: 'Katz',
    phoneNumbers: ['(415) 555-6666']
  },

  {
    guid: ++guid,
    firstName: 'Erik',
    lastName: 'Bryn',
    phoneNumbers: ['(415) 555-2380', '(614) 555-8127']
  },

  {
    guid: ++guid,
    firstName: 'James',
    lastName: 'Rosen',
    phoneNumbers: ['(415) 555-2380']
  },

  {
    guid: ++guid,
    firstName: 'Kara',
    lastName: 'Gates',
    phoneNumbers: ['(207) 555-3141']
  },

  {
    guid: ++guid,
    firstName: 'Dudley',
    lastName: 'Flanders',
    phoneNumbers: ['(415) 555-6789']
  },

  {
    guid: ++guid,
    firstName: 'Tom',
    lastName: 'Dale',
    phoneNumbers: ['(808) 800-8135']
  }
];

// Routes
app.get('/contacts.json', function(req, res) {
  res.send({contacts: contacts});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
