const mongoose = require("mongoose");
const modelObjects = {
    User: require("./User")(mongoose),
    Conversation: require("./Conversation")(mongoose),
    Message: require("./Message")(mongoose)
}
var models = async () => {};
for (let key in modelObjects) {
    let scheme = new mongoose.Schema(
        modelObjects[key].model
    );
    if(modelObjects[key].hooks && Object.keys(modelObjects[key].hooks).length > 0){
        //console.log(modelObjects[key]);
        //console.log(modelObjects[key].hooks);
        for (let hookKey in modelObjects[key].hooks) {
            modelObjects[key].hooks[hookKey].map(k=>{return scheme[hookKey](...k)});
            //console.log(modelObjects[key].hooks[hookKey]);
            //console.log(models.Users.pre);
        }
        //console.log("%j",scheme)
    }
    models[key] = mongoose.model(
        key,
        scheme
    );

}
module.exports = models;