const User = require("./models/User");
const Tweet = require("./models/Tweet");


Tweet.belongsTo(User, {foreignKey: 'author_id', as: 'author'});
User.hasMany(Tweet, {foreignKey: "author_id", as: "tweets"});