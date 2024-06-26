const express=require('express')
const controller=require('../controllers/moviecontroller');

const router=express.Router();

const multer=require('multer');

const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage}).single('image');



router.get('/',controller.Home)
router.post('/insert',upload,controller.insert)
router.get('/table',controller.Table)
router.get('/delete',controller.Delete)
router.get('/edit',controller.Edit)
router.post('/update',upload,controller.Update)

module.exports=router;