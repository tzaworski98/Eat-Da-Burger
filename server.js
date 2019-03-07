var express =  require("express");
// var methodOverride = ("method-override");
// var bodyParser = ("body-parser")
var exphbs = require("express-handlebars");
var routes = require("../Eat-Da-Burger/controllers/burgers_controllers");

var PORT = process.env.PORT || 8889;
var app = express();

app.use(express.static( __dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/" + routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});