import { Router } from 'express';
const router = Router();


router.get('/',(req,res)=>{
	
	return res.send(Object.values(req.context.models.utilisateurs));
});

router.get('/:Iduser',(req,res)=>{
	
	return res.send(req.context.models.utilisateurs[req.params.Iduser]);
});

export default router;

