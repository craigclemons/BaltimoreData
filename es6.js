(function () {
	 //require('babel/register');  
	 //require('./es6.js')
    var bodyParser = require('body-parser');
    var express = require('express');
    var app = express();
    var baltimore = require('./baltimore');
    var _ = require('lodash');
    app.all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
        if ('OPTIONS' == req.method) {
            return res.sendStatus(200);
        }
        next();
    });
    
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    var router = require('express').Router();
    var port = process.env.PORT || 8080;
    
    router.use(function (req, res, next) {
        //do logging
        console.log('Something is happening.');
        next(); //ensure that the router doesn't halt here
    });
    
    
    router.route('/').get(function (req, res, next) {
       
		var thing = {};
		var agencyIdList = [];
		var sid, id, position, createdAt, createdMeta, updatedAt, updatedMeta, meta, name, jobTitle, agencyID, agency, hireDate, annualSalary, grossPay;
		 
		 baltimore.data.forEach(function(entry){
			 //var sid, id, position, createdAt, createdMeta, updatedAt, updatedMeta, meta, name, jobTitle, agencyID, agency, hireDate, annualSalary, grossPay
			 
			 function arrayReturn(){
				 return entry;
			 }
			 
			 [
				 sid,
				 id,
				 position,
				 createdAt,
				 createdMeta,
				 updatedAt,
				 updatedMeta,
				 meta,
				 name,
				 jobTitle,
				 agencyID,
				 agency,
				 hireDate,
				 annualSalary,
				 grossPay
			 ] = arrayReturn() || [];
			 
			 
			 
			 if(!agencyIdList.includes(agencyID)){
				 agencyIdList.push(agencyID);
				 console.log(agency,agencyID);
			 }
			 
		 });
		 
		 
		// var sid = [];
		// var id = [];
		// var position = [];
		// var createdAt = [];
		// var createdMeta = [];
		// var updatedAt = [];
		// var updatedMeta = [];
		// var meta = [];
		// var name = [];
		// var jobTitle = [];
		// var agencyID = [];
		// var agency =  [];
		// var hireDate = [];
		// var annualSalary = [];
		// var grossPay = [];
		// 
		// baltimore.data.forEach( function(entry){
		//	 sid.push(entry[0]);
		//	 id.push(entry[1]);
		//	 position.push(entry[2]);
		//	 createdAt.push(entry[3]);
		//	 createdMeta.push(entry[4]);
		//	 updatedAt.push(entry[5]);
		//	 updatedMeta.push(entry[6]);
		//	 meta.push(entry[7]);
		//	 name.push(entry[8]);
		//	 jobTitle.push(entry[9]);
		//	 agencyID.push(entry[10]);
		//	 agency.push(entry[11]);
		//	 hireDate.push(entry[12]);
		//	 annualSalary.push(entry[13]);
		//	 grossPay.push(entry[14]);
		// });
		 
		//var prettyData = [
		//	 "sid",sid,
		//	 "id",id,
		//	 "position",position
		// ];
		 
		 res.send(agencyIdList);
       next();
    });
    
    
    //router.get('/', function(req, res){
    //    res.json({message: 'hooray, welcome to our api!'});
    //});
    app.use('/', router);
    app.listen(port);
    console.log('Magic happens on port ' + port);
    
}());