const express = require('express');//step1
const app = express();//step1
const port = 8000;//step1


app.use('/',require('./routes/index'));//step2 making routes and controllers
app.set('view engine','ejs');//step3 install ejs it's a view template
app.set('views','./views');//step3 set views folder
app.listen(port ,function(err) {      //step1
    if(err) {                             
        console.log(`Error in running the server :${err}`);
        return ;
    }
    console.log(`server is running on port :${port}`);
});
