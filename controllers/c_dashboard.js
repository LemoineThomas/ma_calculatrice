var express     = require("express"),
request         = require('request'),

app             = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));


var controller = {}

controller.calculatrice = async (req, res) => {
    res.render('homepage/index', {
        title: "Calculatrice"
    })
}


module.exports = controller;