//import { v4 as uuidv4 } from 'uuid';


//const uuidv4 = require('uuid')
var birds = require('./bird')
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const port = 3000 

let utilisateurs = {
	1 : {
		id :'1',
		user_name : 'NESF ',
	},
	2 : {
		id : '2' ,
		user_name : 'FABRICE',
	},
	3 : {
		id : '3' ,
		user_name :'NGANE',
	},
};

let messages = {
	1 : {
		id : '1' ,
		texte : 'Je suis le message de FABRICE' ,
		user_id : 2,
	},
	2 : {
		id : '2' ,
		texte : 'Je suis le message de NGANE' ,
		user_id : 3,
	},
	3 : {
		id : '3' ,
		texte : 'Je suis le message de NESF' ,
		user_id : 1,
	},
	4 : {
		id : '4' ,
		texte : 'Je suis le message de FABRICE' ,
		user_id : 2,
	},
};


//const date = Date.parse(req.body.date);
//const count = Number(req.body.count);






app.use('/bird',birds)

app.get('/',(req,res)=>{
	res.send('hello world!')
});


app.get('/users',(req,res)=>{
	
	res.send(Object.values(utilisateurs));
});

app.get('/users/:Iduser',(req,res)=>{
	
	res.send(utilisateurs[req.params.Iduser]);
})



app.get('/messages',(req,res)=>{
	
	res.send(Object.values(messages));
});

app.get('/messages/:Idmessage',(req,res)=>{
	
	res.send(messages[req.params.Idmessage]);
})

app.post('/messages' ,(req , res) =>{
	 const id = 6;
	 const message = {
	 	id,
	 	texte : req.body.text,
	 	user_id : req.me.id,
	 };

	 messages[id] = message;
	 return res.send( messages);
});
app.delete('/messages:Idmessage',(req,res)=>{
	const {
		[req.params.Idmessage] : message,
		...otherMessages
	} = messages;

	messages = otherM
	essages;
	return res.send(m)
});

app.listen(port,()=>{
	console.log('exemple d\'application sur le port ${port}')
})










/*

MIDDLEWARE



const port = 3000 

var rest = function (req , res , next){
	req.rest = Date.now()
}

app.use(rest)

app.get('/',function(req , res){

	var responsT = 'hello world' 

	responsT += ' time :'+ req.rest 
	res.send(responsT)
})


app.listen(port,()=>{
	console.log('exemple d\'application sur le port '+ port)
})















ROUTE



var birds = require('./bird')
const express = require('express')
const app = express()

const port = 3000 

app.use('/bird',birds)
app.listen(port,()=>{
	console.log('exemple d\'application sur le port ${port}')
})









app.get('/',(req,res)=>{
	res.send('hello world!')
})

app.get('/users',(req,res)=>{
	res.send('hello world users!')
})
app.get('/home',(req,res)=>{
	res.send('hello world home!')
})
app.get('/test',(req,res)=>{
	res.send('hello world test!')
})


*/