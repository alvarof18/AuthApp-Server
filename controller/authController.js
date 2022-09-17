const { response } = require("express");
const { validarGoogleIdToken } = require("../helpers/googe-verify-token");

const googleAuth = async (req,res = response) => {

    //TODO obtener el token
    const token = req.body.token;

    if(!token){
        return res.json({
            ok:false,
            msg: 'No hay token en la peticion'
        });
    }

    const googleUser = await validarGoogleIdToken(token);

    if(!googleUser){
        return res.status(400).json({
            ok:false
        });
    }

    //TODO save in database

    res.json ({
        ok:true,
        googleUser
       });
}

module.exports = {
    googleAuth
}