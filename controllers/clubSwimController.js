const Club = require('../models/club')


module.exports = function (req, res) {

    Club.find({clubType: "ว่ายน้ำ"}).then((info)=> {
        res.render('clubswim',{swim: info});
    })



}