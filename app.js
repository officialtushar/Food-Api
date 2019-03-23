// system imports 
const express = require('express');
const app = express();


// utilities

// cors 
const cors = require('cors');

const Mongodb = require('./src/utils/database').connect;

const bodyParser = require('body-parser');


let corsOptions = {
    origin: 'http://ec2-3-88-164-91.compute-1.amazonaws.com:3000',
    optionsSuccessStatus: 200
}


// importing the middle wares
const FoodRecipesRoutes = require('./src/routes/recipes');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Food Routes
FoodRecipesRoutes(app)


// console.log('port is',port);
app.listen(port, (err) => {
    if(err) {
        console.log('err is ',err);
        
    }
    console.log('running on the port', port);
    Mongodb();
})
