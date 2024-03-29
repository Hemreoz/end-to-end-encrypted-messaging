const handleDuplicateKeyError = (err, res) => {
    //console.log("%j",err);
    let errors = Object.keys(err.keyValue).map(obj => {return {message : "ERR.VAL.UNIQ", field : obj}});
    //console.log(errors);
    if(errors.length > 0) res.valErr(errors);
    else res.single(false,"ERR.UNKNOWN");
}
const handleValidationError = (err, res) => {
    //console.log("%j", err.errors);
    let errors = [];
    for(let i in err.errors){
        errors.push({message : err.errors[i].message, field : i});
    }
    if(errors.length > 0) res.valErr(errors);
    else res.single(false,"ERR.UNKNOWN");
}
//error controller function
module.exports = (err, req, res, next) => {
    try {
        console.log(err.stack);
        if(err.name === 'ValidationError') return err = handleValidationError(err, res);
        else if(err.code && err.code == 11000) return err = handleDuplicateKeyError(err, res);
    }catch(err){
        return res.single(false,"ERR.UNKNOWN");
    }
    return res.single(false,"ERR.UNKNOWN");
}