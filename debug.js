module.exports = {
    print(obj) {
        for(key in obj)
            console.log(key + ': ' + obj[key]);
    }
};