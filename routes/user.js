const {Router}=require('express');
const { usuariosGet,usuarioPost,usuarioDelete,usuarioPut,usuarioPatch} = require('../controllers/usuarios.controller');

const router=Router();


router.get('/',  usuariosGet);

router.put('/:id', usuarioPut);

router.post('/', usuarioPost);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPatch);



module.exports=router;