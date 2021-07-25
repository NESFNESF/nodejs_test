
import routes from './routes';
import models from './models';
var birds = require('./bird')
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const port = 3000 

app.use((req , res , next )=>{
	req.context = {
		models,
		me : models.utilisateurs[1],
	};
	next();
});

app.use('/users', routes.user);
app.use('/messages',routes.messages);
app.use('/session',routes.session);



app.get('/',(req,res)=>{
	res.send('hello world!')
});




app.listen(port,()=>{
	console.log('Serveur démarrer sur le port ' + port);
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