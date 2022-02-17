
var express              = require('express'),
    app                  = express(),
    bodyParser           = require('body-parser');


app.use(express.static("style"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


app.get("/" , async (req, res) => {
    try{
       res.render("home.ejs");
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            error : err.message
        });
    }
});


app.get("/home" , async (req, res) => {
     try{
        res.render("home.ejs");
     }catch(err){
         console.log(err.message);
         return res.status(500).json({
             error : err.message
         });
     }
});



// Port setup
app.listen(process.env.PORT || 8000 , function(){
	console.log("server is running on PORT 8000");
});