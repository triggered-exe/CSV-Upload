const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const csv = require("csv-parser");
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.static('assets'));

app.use(express.urlencoded());

//set templating engine
app.use(expressLayouts);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use("/", require("./routes"));

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Server is running on port ${port}`);
}
)