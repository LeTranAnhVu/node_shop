module.exports = async () => {
    const Tweet = require("./models/Tweet");
    const User = require("./models/User");

    const errHandler = (err) => {
        console.error(err);
    };
    // const user = await User.create({
    //     username: "letananhvu2",
    //     email: "letananh2vu@gmail.com",
    //     fullname: "le tran anh vu2",
    //     password: "123456",
    // }).catch(errHandler);
    //
    // const tweet = await Tweet.create({
    //     content: "hello world 2",
    //     author_id: user.id
    // }).catch(errHandler);

    const users = await User.findAll({
        like: {username: "%letra%"},
        include: [{model: Tweet, as: "tweets"}]
    }).catch(errHandler);

    console.log("result:", users);

};