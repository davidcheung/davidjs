/**
 * HomeController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */


module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  index: function (req,res){
  	console.log('index');
  	return res.view({ 
    	doods : [
    		{name:"David"},
    		{name:"Bavid"}
    	],
    	req : req
    },'home/about');
  },
  sayHello: function (req, res) {
  	console.log('sayHello');
    return res.send({ 
    	"doods" : [
    		{name:"David"},
    		{name:"Bavid"}
    	]
    });
  },
  contact : function  (req, res) {
  	console.log('contact');
    return res.view({ 
    	"contacts" : [
    		{name:"David"},
    		{name:"Bavid"}
    	]
    });
  }

};
