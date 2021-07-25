
import {v4 as uuidv4} from 'uuid';
import { Router } from 'express';

const router = Router();
router.get('/',(req,res)=>{
	
	return res.send(Object.values(req.context.models.messages));
});

router.get('/messages/:Idmessage',(req,res)=>{
	
	return res.send(req.context.models.messages[req.params.Idmessage]);
})

router.post('/messages' ,(req , res) =>{
	 const id = 6;
	 const message = {
	 	id,
	 	texte : req.body.text,
	 };

	 req.context.models.messages[id] = message;
	 return res.send( req.Body);
});

router.delete('/messages:Idmessage',(req,res)=>{
	const {
		[req.params.Idmessage] : message,
		...otherMessages
	} = req.context.models.messages;

	req.context.models.messages = otherMessages;
	return res.send(message)
});

export default router;