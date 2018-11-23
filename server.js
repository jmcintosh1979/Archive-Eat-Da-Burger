const express = require('express'),
    exphbs = require('express-handlebars'),
    PORT = process.env.PORT || 8080,
    app = express(),
    routes = require('./controller/burgers_controller');

  
// Set "Public" as static so can use CSS/jQuery with Handlebar files
app.use(express.static('public'));

// Parse application body as JSON
app.use(epxress.urlencoded({ extended: true}));
app.use(express.json());

// Setting Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Giving server access to routes created
app.use(routes);

// Starting the server so it can listen for requests
app.listen(PORT, function() {
  console.log('Server listening on PORT ' + PORT)
})