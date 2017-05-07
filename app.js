(function () {
    console.log("I'm a git commit")
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
        var jobTitleList = [];
        var annualSalaryList = [];
        var departmentList = [];
		  var aggregateList = [];
        baltimore.data.forEach(function (entry) {
            jobTitleList.push(entry[9])
        });
        baltimore.data.forEach(function (entry) {
            annualSalaryList.push(entry[13])
        });
        baltimore.data.forEach(function (entry) {
            departmentList.push(entry[11])
        });
		  
		  var salaryList = baltimore.data.filter(function(person){
			  return parseInt(person[13]) >= 100000;
		  });
		   
        var unique = _.uniq(departmentList);
		  console.log(unique);
        //console.log(jobTitleList.length + "job titles");
        //console.log(annualSalaryList.length + "annual salaries");
        //console.log(departmentList.length + "departments");
        //console.log(unique.length);
        //var thing = [];
        //for ( x in unique){
        //    if(baltimore.data.forEach(entry[11]) === x){
        //        thing.push({x: entry[13]})
        //    } 
        //}
        //console.log(thing);
        //var comboObject = _.sortBy(annualSalaryList.map(Number));
        
		  res.send(salaryList);
        next();
    });
    
    
    //router.get('/', function(req, res){
    //    res.json({message: 'hooray, welcome to our api!'});
    //});
    app.use('/', router);
    app.listen(port);
    console.log('Magic happens on port ' + port);
    
}());