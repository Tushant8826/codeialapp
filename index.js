const express = require('express');//step1
const cookirParser = require('cookie-parser');//step8 setup cookir parser
const app = express();//step1
const port = 8000;//step1
const expressLayouts =  require('express-ejs-layouts');//step4 install express-ejs-layouts
const db = require('./config/mongoose');//step7 configure database 

//used for session cookie
const session = require('express-session');//step9
const passport = require('passport');//step 9
const passportLocal = require('./config/passport-local-strategy');//step9
const passportJWT= require('./config/passport-jwt-strategy');//step 15 
const passportGoogle =  require('./config/passport-google-oauth2-strategy');//step 16  google authentication
const MongoStore = require('connect-mongo')(session);//step10 store the session cookie
const sassMiddleWare =  require('node-sass-middleware');//step11 for SASS
const flash =  require('connect-flash');//step12 for flash message
const customMware = require('./config/middleware');//step13 custom mware for 
const chatServer = require('http').Server(app);//step 17 chat engine
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);//step 17 see file config/chat_sockets
chatServer.listen(5000);    
app.use(sassMiddleWare({  //step11
    src :'./assets/scss',
    dest :'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}))
app.use(express.urlencoded());//step8 
app.use(cookirParser());//step8
app.use(express.static('./assets'));//step5 
app.use('uploads',express.static(__dirname+'/uploads'));//step 14 make uploads path available to browser
app.use(expressLayouts);//step4 before routes
app.set('layout extractStyles' ,true);//step6 extraxt style and scripts from sub pages into the layouts bascailly put link tage int head tagd
app.set('layout extractScripts' ,true);//step6


app.set('view engine','ejs');//step3 install ejs it's a view template
app.set('views','./views');//step3 set views folder
app.use(session({  //step9
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store : new MongoStore(    // step10
        {
            mongooseConnection:db,
            autoRemove : 'disabled'
        },function(err) {
            console.log(err||'connect mongodb is setup ok');
        }
    )
}));

app.use(passport.initialize());//step9
app.use(passport.session());//step9
app.use(passport.setAuthenticatedUser)//step9
app.use(flash());//step12
app.use(customMware.setFlash);//step13 
app.use('/',require('./routes/index'));//step2 making routes and controllers

app.listen(port ,function(err) {      //step1
    if(err) {                             
        console.log(`Error in running the server :${err}`);
        return ;
    }
    console.log(`server is running on port :${port}`);
});
