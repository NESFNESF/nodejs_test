
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

export default {
	users,
	messages,
}