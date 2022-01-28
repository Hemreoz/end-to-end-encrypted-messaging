module.exports = class customErr extends Error {
    constructor(message,code,expDate="",token="") {
        super(message);
        this.code = code;
        this.expDate = expDate;
        this.token = token;
    }
}