const express = require('express');//step1
const app = express();//step1
const port = 8000;//step1




app.listen(port ,function(err) {      //step1
    if(err) {                             
        console.log(`Error in running the server :${err}`);
        return ;
    }
    console.log(`server is running on port :${port}`);
});
