var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RecipesSchema = new Schema({

    name: {
        type: String,
        // required: true
    },
    ingredients: {
        type: Array
    }
    
})


module.exports = mongoose.model('recipes', RecipesSchema);
