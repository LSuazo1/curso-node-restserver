const { response,request } = require('express');
res = response;
const usuariosGet = (req=request, res=response) => {
   const query= req.query;
    res.json({
        msg: 'get API-Controlador',
        query
    });
}

const usuarioPost = (req, res) => {
    const body =req.body;
    res.json({
        msg: 'post API-Controlador'
        ,body
    })
}

const usuarioDelete = (req, res) => {
    res.json({
        msg: 'delete API-controlador'
    })
}

const usuarioPut = (req, res) => {
    const id=req.params.id;
    res.json({
        msg: 'put API-controlador',
        id
    })
}
const usuarioPatch = (req, res) => {
    res.json({
        msg: 'patch API-controlador'
    })
}

module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioDelete,
    usuarioPut,
    usuarioPatch
}