const Club = require('../models/club')


module.exports = async function (req, res) {


    let infoId = req.body.sendid
    await Club.findByIdAndDelete(infoId).then((complete)=>{
        console.log(complete)
    }).catch((error)=>{
        console.error(error)
    })
    
    // res.redirect(req.get('referer'));
    res.redirect('back');


}