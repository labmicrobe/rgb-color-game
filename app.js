var express=require("express");
var app=express();
app.use(express.static(__dirname + "/public"));

app.set("view engine","ejs");

app.get("/",function (req,res) {
	res.render("colorgame");
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});